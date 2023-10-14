import { useEffect } from 'react'
import 'ol/ol.css'
import Map from 'ol/Map'
import View from 'ol/View'
import { OSM, XYZ } from 'ol/source'
import { Tile as TileLayer } from 'ol/layer'
import { useGeographic } from 'ol/proj'

export default function MiniMap() {
    useEffect(() => {
        useGeographic()
        const map = new Map({
            target: "minimap",
            view: new View({
                zoom: 12,
                center: [116.395645, 39.92998]
            }),
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ]
        })

        return () => {
            map.dispose()
        }
    }, [])


    return (
        <div className="minimap" id='minimap' style={{ width: '100%', height: '600px' }}></div>
    )
}