import React, { Component } from 'react';
import nanoid from 'nanoid';
import './Timeline.css';

import '../Column/Column.css';

// Components
// import { Column } from '../Column/Column';

export class Timeline extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollLeft: 0,
            limit: 107,
        }
    }

    onScroll(e) {
        const endIndex  = Math.min(
            this.state.limit - 1,
            Math.floor((this.state.scrollLeft + window.screen.width) / 40)
        );

        this.setState({
            scrollLeft: e.currentTarget.scrollLeft,
            limit: endIndex > this.state.limit - 36 ? this.state.limit + 36 : this.state.limit
        });
    }

    renderItem(i) {
        return (<div key={i} 
                     className="timeline_column" 
                     style={{position: 'absolute', left: `${i * 40}px`}}>{i}</div>
        );
    }

    render() {
        const innerWidth = this.state.limit * 40;
        const startIndex = Math.floor(this.state.scrollLeft / 40);
        const endIndex  = Math.min(
            this.state.limit - 1,
            Math.floor((this.state.scrollLeft + window.screen.width) / 40)
        );
        const items = [];

        for (let i = startIndex; i < endIndex; i++) {
            items.push(this.renderItem(i));
        }

        console.log(innerWidth, startIndex, endIndex, this.state.scrollLeft);

        return (
            <div className="timeline" onScroll={this.onScroll.bind(this)}>
                <div className="inner" style={{height: '100%', display: 'flex', width: `${innerWidth}px`, position: 'relative'}}>
                    {items}
                </div>
            </div>
        )
    }
}

// export const Timeline = props => {
//     const { numItems, itemHeight, renderItem, windowHeight } = props;
//     const [scrollTop, setScrollTop] = useState(0);
  
//     const innerHeight = numItems * itemHeight;
//     const startIndex = Math.floor(scrollTop / itemHeight);
//     const endIndex = Math.min(
//       numItems - 1, // don't render past the end of the list
//       Math.floor((scrollTop + windowHeight) / itemHeight)
//     );
  
//     const items = [];
//     for (let i = startIndex; i <= endIndex; i++) {
//       items.push(
//         renderItem({
//           index: i,
//           style: {
//             position: "absolute",
//             top: `${i * itemHeight}px`,
//             width: "100%"
//           }
//         })
//       );
//     }
  
//     const onScroll = e => setScrollTop(e.currentTarget.scrollTop);
  
//     return (
//       <div className="scroll" style={{ overflowY: "scroll" }} onScroll={onScroll}>
//         <div
//           className="inner"
//           style={{ position: "relative", height: `${innerHeight}px` }}
//         >
//           {items}
//         </div>
//       </div>
//     );
//   };
// export class Timeline extends Component {
//     constructor(props) {
//         super(props);

//         const numColumns = parseInt(windown.outerWidth.width / 40, 10);
//         const numQudrants = this.state && this.state.numQudrants || 3;

//         this.state = {
//             columns: [Array(numColumns), 
//                         Array(numColumns), 
//                         Array(numColumns)],
//             isFirstQuadrantActive: false,
//             isSecondQuadrantActive: false,
//             isThirdQuadrantActive: false  ,
//             prevActive: '',
            
//             numQudrants: 3,
//             testColumns: [Array(numColumns), Array(numColumns), Array(numColumns)],
//             limit: windown.outerWidth.width * numQudrants
            
//         }
//     }

//     componentDidMount() {
//         // const timeline = document.querySelector('.timeline');
//         // const numColumns = parseInt(windown.outerWidth.width / 40, 10);
//         // timeline.scrollLeft = 40 * parseInt(numColumns, 10);

//     }

//     scrollVisor(e) {
//         const timeline = document.querySelector('.timeline');
//         const activeQuadrant = this.checkActiveQuadrant(timeline.scrollLeft);

//         if (this.state.prevActive !== activeQuadrant) {
//             this.setState({
//                 isFirstQuadrantActive: false,
//                 isSecondQuadrantActive: false,
//                 isThirdQuadrantActive: false,
//                 prevActive: activeQuadrant,
//                 [activeQuadrant]: true,
//             });
//         }
//     }

//     checkActiveQuadrant(offset) {
//         if (offset < 1440) {
//             return 'isFirstQuadrantActive';
//         } else if (offset >= 1440 && offset < 2880) {
//             return 'isSecondQuadrantActive';
//         } else if (offset >= 2880) {
//             return 'isThirdQuadrantActive';
//         }
//     }


//     testScroll(e) {
//         const timeline = document.querySelector('.timeline');
//         // const activeQuadrant = this.checkActiveQuadrant(timeline.scrollLeft);

//         const breakPoint = timeline.scrollLeft + windown.outerWidth.width;

//         console.log(breakPoint, this.state.limit - windown.outerWidth.width);

//         const newNumQuadrants = this.state.numQudrants + 1;
//         if (breakPoint > this.state.limit - windown.outerWidth.width) {
//             this.setState({
//                 testColumns: [...this.state.testColumns, Array(36)],
//                 limit: windown.outerWidth.width * newNumQuadrants,
//                 numQudrants: newNumQuadrants
//             });
//         }
//     }

//     render() {
//         // const firstQuadrant = this.state.columns[0];
//         // const secondQuadrant = this.state.columns[1];
//         // const thirdQuadrant = this.state.columns[2];

//         // const isFirstQuadrantActive = this.state.isFirstQuadrantActive;
//         // const isSecondQuadrantActive = this.state.isSecondQuadrantActive;
//         // const isThirdQuadrantActive = this.state.isThirdQuadrantActive;

//         console.log('columns: ', this.state.testColumns);
//         return(
//             <div className="timeline" onScroll={this.testScroll.bind(this)}>
//                 {this.state.testColumns.map((columns, i) => {
//                     return [...columns].map((_, j) => <Column key={nanoid()} num={j}/>)
//                 })}
//                 {/* {[...firstQuadrant].map((_, i) => <Column key={i} num={i} isActive={isFirstQuadrantActive}/>)}
//                 {[...secondQuadrant].map((_, i) => <Column key={i} num={i} isActive={isSecondQuadrantActive}/>)}
//                 {[...thirdQuadrant].map((_, i) => <Column key={i} num={i} isActive={isThirdQuadrantActive}/>)} */}
//             </div>
//         )
//     }
// }