// ConfirmCallDestination.tsx (サーバーコンポーネント)
import { VStack, Text, Flex, Box } from '@kuma-ui/core';
import ActionButtons from './_components/ActionButton'; // 新しく作成するクライアントコンポーネント

type PageProps = {
  searchParams: { data: string }
}

export const ConfirmCallDestination = async ({ searchParams }: PageProps) => {
  const selectedOption = searchParams.data;

  return ( 
    <Flex maxWidth="768px" height={'100vh'} margin="0 auto" justifyContent={'center'} alignItems={'center'} backgroundImage="url('/hitocolor-logo.webp')" bgRepeat={'no-repeat'} bgSize={'contain'} bgPosition={'center'}>
      <VStack gap="20px" alignItems="center">
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100%"
          height="100%"
          backgroundColor="rgba(0,0,0,0.5)"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            backgroundColor="white"
            padding="20px"
            borderRadius="10px"
            width="80%"
            maxWidth="500px"
            textAlign={'center'}
          >
            <Text fontSize="x-large" marginBottom="20px" padding={'10px'} >
              「{selectedOption}」を呼び出します。<br />よろしいですか？
            </Text>
            <ActionButtons />
          </Box>
        </Box>
      </VStack>
    </Flex>
  );
}

export default ConfirmCallDestination;