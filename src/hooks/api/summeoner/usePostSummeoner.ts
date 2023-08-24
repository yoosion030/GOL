import { useMutation } from '@tanstack/react-query';
import { registerSummeoner } from 'utils/summeoner';

export const usePostRegisterSummeoner = () =>
  useMutation(['registerSummeroner'], (accountId?: string) =>
    registerSummeoner(accountId),
  );
