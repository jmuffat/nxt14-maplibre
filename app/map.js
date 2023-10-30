'use client'

import React from 'react'
import maplibregl from 'maplibre-gl'

export const MapContext = React.createContext()

export function Map( {className,children}) {
    const [context,setContext] = React.useState(null)

    React.useEffect(
        () => {
            const _map = new maplibregl.Map({
                container: 'map',
                style: 'https://tiles.stadiamaps.com/styles/alidade_smooth.json',
                center: [3,46],  // Initial focus coordinate
                zoom: 4
            })

            // Add zoom and rotation controls to the map.
            _map.addControl(new maplibregl.NavigationControl())

            setContext({maplibregl,map:_map})

            return ()=>{
                _map.remove()
                setContext(null)
            }
        },
        []
    )

    return (
        <MapContext.Provider value={context}>
            <div className={className} id="map"/>
            {children}
        </MapContext.Provider>
    )
}

export default Map
