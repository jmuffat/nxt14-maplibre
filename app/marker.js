"use client"

import React from 'react'
import { MapContext } from './map'

export function Marker({lng,lat,color,children}) {
    const context = React.useContext(MapContext)
    const popupRef = React.useRef()

    React.useEffect(
        ()=>{
            if (!context) return
            
            const marker = new context.maplibregl.Marker({color})
                .setLngLat([lat,lng])
                .addTo(context.map)

            if (children) {
                const popup = new context.maplibregl.Popup({offset: 25})
                    .setDOMContent(popupRef.current)
                
                marker.setPopup(popup)
            }
            
            return ()=>marker.remove()
        },
        [context, lng,lat,color, children]
    )

    if (!children) return null

    return (
        <div className='hidden'>
            <div ref={popupRef}>
            {children}
            </div>
        </div>
    )
}

