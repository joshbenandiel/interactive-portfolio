import { LoadingContainer } from "./styled"


export const PreLoader: React.FC<any> = ({worksData}) => {
  return (
    <LoadingContainer firstColor={worksData.load.first} secondColor={worksData.load.second}>
      <div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </LoadingContainer>
  )
}
