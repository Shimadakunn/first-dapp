import { useContractRead } from 'wagmi';
import ABICLAIMER from './Meebits_claimer.js';

const getClaimedTokens = (nftId:Number) => {
  const { data, isError, isLoading } = useContractRead({
    address: '0x5341e225Ab4D29B838a813E380c28b0eFD6FBa55',
    abi: ABICLAIMER[0].abi,
    functionName: 'tokensThatWereClaimed',
    args: [nftId],
    onSuccess(data) {
      console.log('Success', data);
    },
    onError(error) {
      console.log('Error', error);
    },
    onSettled(data, error) {
      console.log('Settled', { ABICLAIMER, data, error });
    },
  });

  return { data, isError, isLoading };
};

export default getClaimedTokens;
