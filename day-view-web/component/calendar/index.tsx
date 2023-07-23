import styled, { css } from 'styled-components';
import Channel from '@/component/calendar/channelSection';
import DateSection from '@/component/calendar/dateSection/DateSection';
import { useRecoilValue } from 'recoil';
import { pixelToRemUnit } from '@/shared/styles/util';
import { useMemo } from 'react';
import CategoryHeader from '../category/CategoryHeader';
import ScheduleHeader from '../schedule/ScheduleHeader';
import {
  G_isOpenChannelAtom,
  G_isSearchOpenAtom,
  G_tabAtom,
} from '@/shared/component/Organism/GNB/state';
import SearchResult from '@/component/calendar/searchResult';

const tabList = {
  월: <DateSection />,
  일정: <ScheduleHeader />,
  카테고리: <CategoryHeader />,
};

const Calendar = () => {
  const isOpenChannel = useRecoilValue(G_isOpenChannelAtom);
  const isSearchOpen = useRecoilValue(G_isSearchOpenAtom);
  const tabLabel = useRecoilValue(G_tabAtom);
  const curTabElement = useMemo(() => tabList[tabLabel], [tabLabel]);

  return (
    <CalderWrap>
      <Channel />
      <TabWrap isOpenChannel={isOpenChannel}>
        {isSearchOpen ? <SearchResult /> : curTabElement}
      </TabWrap>
    </CalderWrap>
  );
};
export default Calendar;

const CalderWrap = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 100px);
`;

const TabWrap = styled.div<{ isOpenChannel: boolean }>`
  width: 100%;
  transition: all 0.3s ease-out 0.05s;
  ${({ isOpenChannel }) =>
    isOpenChannel &&
    css`
      margin-left: ${pixelToRemUnit(373)};
    `}
`;
