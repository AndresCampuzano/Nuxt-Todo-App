import { ItemType } from '~/types/ItemType'

/**
 * Returns To-do items from given API
 * @returns {ItemType[]}
 */
export const getItems = async (): Promise<ItemType[]> => {
  // TODO: store API endpoint inside .env file
  return await fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res) => res.json())
    .catch((e) => console.error(e))
}
