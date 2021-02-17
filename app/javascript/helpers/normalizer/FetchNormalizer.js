import BlockNormalizer from './BlockNormalizer'
import ItemNormalizer from './ItemNormalizer'
import VendorNormalizer from './VendorNormalizer'

const FetchNormalizer = (json) => {

    const blocks = {}, items = {},  vendors = {}

    json.vendors.data.forEach((vendor) => {
        vendors[`${vendor.id}`] = VendorNormalizer(vendor)
    })

    json.vendors.included.forEach((element) => {
        if(element.type == "block"){
            blocks[`${element.id}`] = BlockNormalizer(element)
        } else if(element.type == "item") {
            items[`${element.id}`] = ItemNormalizer(element)
        }
    });

    const user = {...json.user.data.attributes}
    
    return {
        vendors,
        items,
        blocks,
        user
    }
}

export default FetchNormalizer;