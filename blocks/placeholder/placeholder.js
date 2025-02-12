import { fetchPlaceholders} from '../../scripts/aem.js';

export default async function decorate(block) {
	const placeholders = await fetchPlaceholders('');
    console.log(placeholders);
}
