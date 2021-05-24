import {BiCheck} from "react-icons/bi";

// eslint-disable-next-line no-unused-vars
const DropDown = ({ toggle, sortBy, onSortByChange, orderBy, onOrderByChange }) => {
  if (!toggle) {
    return null;
  }
  return (
      <div className="origin-top-right absolute right-0 mt-2 w-56
      rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <div onClick={() => onSortByChange('petName')}
               className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
               role="menuitem">Pet Name {(sortBy === 'petName') && <BiCheck />}</div>
          <div onClick={() => onSortByChange('ownerName')}
               className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
               role="menuitem">Owner Name {(sortBy === 'ownerName') && <BiCheck />}</div>
          <div onClick={() => onSortByChange('aptDate')}
               className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
               role="menuitem">Date {(sortBy === 'aptDate') && <BiCheck />}</div>
          <div onClick={() => onOrderByChange('asc')}
               className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2"
               role="menuitem">Asc {(orderBy === 'asc') && <BiCheck />}</div>
          <div onClick={() => onOrderByChange('desc')}
               className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
               role="menuitem">Desc {(orderBy === 'desc') && <BiCheck />}</div>
        </div>
      </div>
  )
}

export default DropDown;