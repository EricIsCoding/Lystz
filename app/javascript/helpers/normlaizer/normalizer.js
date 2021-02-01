import blockNormalizer from './blockNormalizer'
import itemNormalizer from './itemNormalizer'
import vendorNormalizer from './vendorNormalizer'

const normalizer = (json) => {

    const blocks = {}
    const items = {}
    const vendors = {}

    json.data.forEach((vendor) => {
        vendors[`${vendor.id}`] = vendorNormalizer(vendor)
    })

    json.included.forEach((element) => {
        if(element.type == "block"){
            debugger;
            blocks[`${element.id}`] = blockNormalizer(element)
        } else if(element.type == "item") {
            debugger;
            items[`${element.id}`] = itemNormalizer(element)
        }
    });

    return {
        vendors,
        items,
        blocks
    }
}

export default normalizer;