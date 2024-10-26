import { Console } from '@woowacourse/mission-utils';

export async function inputCarNames() {
  const carNames = await Console.readLineAsync(
    '경주할 자동차 이름(이름은 쉼표(,) 기준으로 구분)\n',
  );
  const carNameList = carNames.split(',');

  return carNameList;
}
