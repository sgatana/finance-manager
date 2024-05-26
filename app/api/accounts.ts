export type Account = {
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

const accounts: Account[] = [
  { id: '1', name: 'Test Account 1' },
  { id: '2', name: 'Test Account 2' },
];

export const addAccount = (accountName: string) => {
  accounts.push({ id: `${accounts.length + 1}`, name: accountName });
  console.log(accounts);
};
export const deleteAccount = (accountIds: string[]) => {
  accountIds.forEach((id) => {
    const accountIndex = accounts.findIndex((account) => account.id === id);
    accounts.splice(accountIndex, 1);
  });
};

export const getAccounts = () => accounts
