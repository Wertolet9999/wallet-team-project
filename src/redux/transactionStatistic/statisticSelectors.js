export const selectStatistic = state => state.statistic.summary;
export const selectIsLoadingStatistic = state =>
  state.statistic.isLoadingSummary;
export const selectError = state => state.statistic.error;
