import BlockNormalizer from './BlockNormalizer'
import ItemNormalizer from './ItemNormalizer'
import VendorNormalizer from './VendorNormalizer'

const FetchNormalizer = (json) => {

    const blocks = {}, items = {},  vendors = {}

    json.data.forEach((vendor) => {
        vendors[`${vendor.id}`] = VendorNormalizer(vendor)
    })

    json.included.forEach((element) => {
        if(element.type == "block"){
            blocks[`${element.id}`] = BlockNormalizer(element)
        } else if(element.type == "item") {
            items[`${element.id}`] = ItemNormalizer(element)
        }
    });

    return {
        vendors,
        items,
        blocks
    }
}

export default FetchNormalizer;