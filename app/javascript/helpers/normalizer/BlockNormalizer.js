import childIds from '../childIds'

const BlockNormalizer = (block) => {
    return {
        id: block.id,
        ...block.attributes,
        itemIds: childIds(block.relationships.items.data),
        vendorId: block.relationships.vendor.data.id
    }
}

export default BlockNormalizer;