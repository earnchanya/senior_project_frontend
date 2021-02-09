import qs from 'qs'
import { useLocation } from 'react-router-dom'

export default function useQuery () {
	const { search } = useLocation()

	return qs.parse(search, { ignoreQueryPrefix: true })
}
