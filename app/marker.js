"use client"

import React from 'react'
import {renderToString} from 'react-dom/server'
import { MapContext } from './map'

export function Marker({lng,lat,color,children}) {
    const context = React.useContext(MapContext)

    React.useEffect(
        ()=>{
            if (!context) return
            
            const marker = new context.maplibregl.Marker({color})
                .setLngLat([lat,lng])
                .addTo(context.map)

            if (children) {
                const popup = new context.maplibregl.Popup({offset: 25})
                    .setHTML(renderToString(<div>{children}</div>))
                
                marker.setPopup(popup)
            }
            
            return ()=>marker.remove()
        },
        [context, lng,lat,color, children]
    )

    return null // do not generate any html
}

