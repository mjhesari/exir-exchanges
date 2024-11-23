'use client';

const useGetKeyof = () => {
  function getKey<T>(object: T, key: string) {
    return object[key as keyof typeof object];
  }

  return {
    getKey,
  };
};
export default useGetKeyof;
