import { useMutation } from '@tanstack/react-query';
import { deleteSummeoner } from 'utils/summeoner';

export const useDeleteSummeoner = () =>
  useMutation(['deleteSummeoner'], (accountId: string) =>
    deleteSummeoner(accountId),
  );
