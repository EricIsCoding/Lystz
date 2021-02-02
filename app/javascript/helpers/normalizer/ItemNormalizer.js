const ItemNormalizer = (item) => {
    return {
        id: item.id,
        ...item.attributes,
        vendorId: item.relationships.vendor.data.id,
        blockId: item.relationships.block.data.id
    }
}

export default ItemNormalizer;