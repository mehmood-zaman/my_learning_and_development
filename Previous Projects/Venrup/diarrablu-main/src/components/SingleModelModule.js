import "../main.css"
import "../mobile.css"
import React, { useRef } from 'react';
import {exportComponentAsPNG } from 'react-component-export-image';


const SingleModelModule = (props) => {
    const exportOptions = {backgroundColor: null,
                           allowTaint:false,
                           useCors:false}


    const componentRef = useRef();

    const patternImage = props.patternImage ? props.patternImage : "none"
    const patternTransform = props.patternRotation > 0 ? `rotate(${props.patternRotation}deg) scale(1.35)` :""

// console.log(patternImage)
    return  (

      <div className="ghost-grid">
      {
      <style dangerouslySetInnerHTML={{
          __html: [
             '.pattern:before {',
             ` transform:${patternTransform};`,
             ` background-image:${patternImage};`,
             ` background-repeat:${props.patternRepeat};`,
             ` background-size:${props.patternSize};`,
             ` background-position:${props.patternPosition};`,
           '}'
            ].join('\n')
          }}>

        </style>
      }
        <div class="backdrop">
          <div className="model" ref={componentRef} key={props.modelName}>

            <div
                className="ghost"
                style = {{backgroundImage:props.ghostImage,
                          backgroundSize:props.ghostSize,
                          backgroundPosition:`center center`,
                          backgroundRepeat: `no-repeat`,
                        }}
                               />

             <div
                 className="pattern"
                 // data-content={props.patternImage}
                 style = {{
                           // backgroundImage:props.patternImage,

                           WebkitMaskImage:props.ghostImage,
                           maskImage:props.ghostImage,
                           // backgroundPosition:props.patternPosition,
                           // backgroundRepeat: props.patternRepeat,
                         }}
                                />
            {
              props.coverImage &&
             <div
               className="covers"
               style = {{
                       backgroundImage:props.coverImage,
                       backgroundSize:`contain`,
                     }}/>
                   }
          </div>
    </div>
        <div>

          <div class="model-name">
            {props.modelName}
          </div>

{
          // <div class="model-name"
          // onClick={() => exportComponentAsPNG(componentRef,{ html2CanvasOptions: exportOptions }  )}>
          //   Save image
          // </div>
        }
        </div>


      </div>

    )
}


export default SingleModelModule;
