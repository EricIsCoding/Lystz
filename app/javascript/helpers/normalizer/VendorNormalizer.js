import childIds from '../childIds'

const VendorNormalizer = (vendor) => {
    let blockIds = [], itemIds = []

    if(vendor.relationships){
        blockIds = childIds(vendor.relationships.blocks.data)
        itemIds = childIds(vendor.relationships.items.data)
    }

    return {
        id: vendor.id,
        ...vendor.attributes,
        blockIds,
        itemIds
    }
}

export default VendorNormalizer;