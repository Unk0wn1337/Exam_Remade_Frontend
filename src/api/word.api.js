import { AxiosConfiguration } from './AxiosConfiguration'

export const getWordList = async () => {
  const { data: wordList } = await AxiosConfiguration.get('/index')
  console.log(wordList)
  return { wordList }
  // todo implement
  // const { isPending, error, data } = useQuery({
  //   queryKey: ['repoData'],
  //   queryFn: () =>
  //     fetch('https://api.github.com/repos/TanStack/query').then((res) =>
  //       res.json(),
  //     ),
  // })
}
