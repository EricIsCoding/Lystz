import childIds from '../childIds'

const vendorNormalizer = (vendor) => {
    let blockIds = childIds(vendor.relationships.blocks.data)
    let itemIds = childIds(vendor.relationships.items.data)
    return {
        id: vendor.id,
        ...vendor.attributes,
        blockIds,
        itemIds
    }
}

export default vendorNormalizer;