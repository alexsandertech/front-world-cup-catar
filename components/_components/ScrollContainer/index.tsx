import React, {useRef} from "react";
import { Arrow } from "./scrollStyles";

import { ArrowLineLeft, ArrowLineRight } from "../../_Icons";

export default function ScrollContainer({ children, ...pageProps}: any ) {
    const ref = useRef(null);
    
    const scroll = (scrollOffset : any) => {
        // @ts-ignore
        ref.current.scrollLeft += scrollOffset;
    };

    return (
        <div style={{display: 'flex', flexDirection: 'column', width: '100%'}}>
            <div ref={ref} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%', padding: '0px',  overflowX : 'auto'}}>
                {
                    React.cloneElement(children, {
                        isregisterpage: pageProps.isRegisterPage,
                        isloginpage: pageProps.isLoginPage,
                        outhome: pageProps.outHome
                    })
                }
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100%'}}>
                <Arrow onClick={() => scroll(-90)}>
                    <ArrowLineLeft/>
                </Arrow>
                <Arrow onClick={() => scroll(90)}>
                    <ArrowLineRight/>
                </Arrow>
            </div>
        </div>
    )
}

/**

 */