import BlockNormalizer from './BlockNormalizer'
import ItemNormalizer from './ItemNormalizer'


const GroupNormalizer = (groupData) => {

    const group={}, blocks = {}, items = {}

    group["groupName"] = groupData.attributes.group_name
    group["blockIds"] = groupData.attributes.blockIds

    groupData.attributes.blocks.forEach((block) => {
        blocks[block.data.id] = BlockNormalizer(block.data)
        if(block.included) {
            block.included.forEach((item) => {
                items[item.id] = ItemNormalizer(item)
            })
        }
    });

    return {
        group,
        blocks,
        items
    }
}

export default GroupNormalizer;