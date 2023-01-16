// import React, {useRef} from "react";
// import {useDrag, useDrop} from "react-dnd";
// import {Identifier, XYCoord} from "dnd-core";
//
// const style = {
//   border: '1px dashed gray',
//   padding: '0.5rem 1rem',
//   marginBottom: '.5rem',
//   backgroundColor: 'white',
//   cursor: 'move',
// }
//
// export interface CardProps {
//   id: any
//   text: string
//   index: number
//   moveCard: (dragIndex: number, hoverIndex: number) => void
// }
//
// interface DragItem {
//   index: number
//   id: string
//   type: string
// }
//
// const Card: React.FC<CardProps> = (props) => {
//
//   const {id, text, index, moveCard} = props;
//
//   const ref = useRef<HTMLDivElement>(null);
//
//   const [{handlerId}, drop] = useDrop<DragItem, void, { handlerId: Identifier | null; }>({
//     accept: 'card',
//     collect(monitor) {
//       return {
//         handlerId: monitor.getHandlerId(),
//       }
//     },
//     hover(item: DragItem, monitor) {
//       if (!ref.current) {
//         return
//       }
//       const dragIndex = item.index
//       const hoverIndex = index
//       if (dragIndex === hoverIndex) {
//         return
//       }
//       const hoverBoundingRect = ref.current?.getBoundingClientRect()
//       const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
//       const clientOffset = monitor.getClientOffset()
//       const hoverClientY = (clientOffset as XYCoord).y - hoverBoundingRect.top
//       if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
//         return
//       }
//       if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
//         return
//       }
//       moveCard(dragIndex, hoverIndex)
//       item.index = hoverIndex
//     },
//   });
//
//   const [{isDragging}, drag] = useDrag({
//     type: 'card',
//     item: () => {
//       return {id, index}
//     },
//     collect: (monitor: any) => ({
//       isDragging: monitor.isDragging(),
//     }),
//   });
//   const opacity = isDragging ? 0 : 1;
//
//   drag(drop(ref));
//
//   return <>
//     <div ref={ref} style={{...style, opacity}} data-handler-id={handlerId}>
//       {text}
//     </div>
//   </>;
// };
//
//
// const Dnd = () => {
//   return <>
//     <Card id={1} text={'zhangsan'} index={1} moveCard={}/>
//   </>;
// }
//
// export default function Home() {
//
//   return <>
//     <span>react dnd demo</span>
//     <Dnd/>
//   </>;
//
// };