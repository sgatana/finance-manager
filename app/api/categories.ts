export type Category = {
  id: string;
  name: string;
  userId?: string;
};
export type User = {
  id: string;
  email: string;
  lastName: string;
  firstName: string;
};

const categories: Category[] = [
  { id: '1', name: 'Clothing' },
  { id: '2', name: 'Rent' },
  { id: '3', name: 'Utilities' },
  { id: '4', name: 'Other' },
];

export const addCategory = (categoryName: string) => {
  categories.push({ id: `${categories.length + 1}`, name: categoryName });
  console.log(categories);
};
export const deleteCategory = (categoryIds: string[]) => {
  categoryIds.forEach((id) => {
    const categoryIndex = categories.findIndex((category) => category.id === id);
    categories.splice(categoryIndex, 1);
  });
};

export const getCategories = () => categories
