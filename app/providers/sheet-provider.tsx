'use client';

import NewAccount from '@/components/account/new-account';
import NewCategory from '@/components/category/new-category';
import NewTransaction from '@/components/transaction/new-transaction';

const SheetProvider = () => {
  return (
    <>
      <NewAccount />
      <NewCategory />
      <NewTransaction />
    </>
  );
};
export default SheetProvider;
