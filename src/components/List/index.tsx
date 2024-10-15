import React from 'react'
import { GitHubUser } from '../../types/GitHubUser'
import Item from '../Item'

const List = ({searchResult} : {searchResult: GitHubUser[]}) => {
  return (
    <div className="row">
          {searchResult?.map((item) => (
            <Item item={item} key={item?.id} />
          ))}
        </div>
  )
}

export default List