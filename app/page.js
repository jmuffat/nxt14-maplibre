import { Map } from './map'
import { Marker } from './marker'

export default function Home() {
    return (
        <main className='m-4'>
            <Map className='w-96 h-96'>
                <Marker lng={43.56241} lat={7.12777}>
                    <p><strong>Antibes</strong></p>
                    <p>What a lovely city !</p>
                </Marker>
            </Map>
        </main>
    )
}
