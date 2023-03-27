
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = ({ text }) => (
    <div className="pin">
        <Icon icon={locationIcon} className="big-icon" style={{ fontSize: '30px' }} />
        <p className="pin-text" >{text}</p>
    </div>
    )

export default LocationPin