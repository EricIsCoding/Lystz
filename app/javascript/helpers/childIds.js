const childIds = (childArray) => {
    if(childArray){
      return childArray.map((child) => child.id)
      }
    else{
      return []
    }
  }

export default childIds;