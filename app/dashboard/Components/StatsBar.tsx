import { useState } from "react";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CategoryIcon from '@mui/icons-material/Category';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CategoriesCard from "./CategoriesCard";


export interface StatisticCard {
  id: number;
  name: string;
  icon: React.ReactNode;
  count: number;
}

const StatsBar = () => {

  const [statisticsCards, setStatisticsCard] = useState<StatisticCard[]>([
    {
      id: 1,
      name: "Projects Created",
      icon: <AccountTreeIcon className="text-sky-400" />,
      count: 3,
    },
    {
      id: 2,
      name: "Components Added",
      icon: <CategoryIcon className="text-sky-400" />,
      count: 12,
    },
    {
      id: 3,
      name: "Favorite components",
      icon: <FavoriteIcon className="text-sky-400" />,
      count: 3
    },
  ])

  return (
    <div className="mt-8">
      <div className="grid grid-cols-3 gap-4 rounded-lg mt-2">
        {
          statisticsCards.map((card, index) => (
            <div key={index}>
              <CategoriesCard singleCard={card} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default StatsBar