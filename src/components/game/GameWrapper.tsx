import { FC } from 'react';
import { NextSeo } from 'next-seo';
import Container from '@/components/common/Container';
import HeadingCircle from '@/components/common/HeadingCircle';
import BackgroundGrid from '@/components/common/BackgroundGrid';
import { GameWithRanks } from '@/types/game';

type GameWrapperProps = {
  game: GameWithRanks;
  children?: React.ReactNode;
};

export const GameWrapper: FC<GameWrapperProps> = ({ game, children }) => {
  const description = `Guess the rank of user-submitted gameplay in ${game.name} daily with RankGuess. Test your knowledge and track your stats to see how you improve over time. Remember, the game resets at 12 am EST, so submit your guesses before then!`;

  return (
    <>
      <NextSeo
        title={`Guess the Rank in ${game.name}`}
        description={description}
        openGraph={{
          url: `https://www.rankguess.com/game/${game.slug}`,
          title: `Guess the Rank in ${game.name}`,
          description: description,
        }}
      />

      <main id='main-content' className='relative py-12 lg:pt-16 lg:pb-32'>
        <Container>
          <HeadingCircle />
          <BackgroundGrid />
          <div className='relative'>
            <h1 className='page-heading-1'>{game.name}</h1>
            <h2 className='page-heading-2 lg:mt-2'>Resets in: 0h 0m</h2>
            <div className='mt-12 text-center lg:mt-16'>{children}</div>
          </div>
        </Container>
      </main>
    </>
  );
};
