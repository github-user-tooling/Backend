import { IProfileDTO, ICalendarDTO, IMonthlyContributions } from 'models';
import { IProfileNode } from 'github/queries';
import { ICalendarPayload, IWeek, IDay } from 'github/queries';
import { IRepoCommits, IRepoLang } from 'github/queries';

import { mode } from './arr.util';

export const formatProfile: (profile: IProfileNode) => IProfileDTO = (profile) => {
  const { repos, commits, ...generalDetails } = profile;
  return { ...generalDetails, repos: repos.count, commits: commits.count };
};

export const formatCalendar: ({ weeks }: ICalendarPayload) => ICalendarDTO = ({ weeks }) => {
  const dataSet = groupWeeks(weeks);
  const months = Object.keys(dataSet);
  const commits = Object.values(dataSet);
  return { months, commits };
};

const groupWeeks: (weeks: IWeek[]) => IMonthlyContributions = (month) => {
  return month.reduce((weeks, { contributionDays }) => {
    const week = groupDays(contributionDays);

    for (const [key, count] of Object.entries(week)) {
      weeks[key] = (weeks[key] || 0) + count;
    }

    return weeks;
  }, {});
};

const groupDays: (week: IDay[]) => IMonthlyContributions = (week) => {
  return week.reduce((days, { count, date }) => {
    const formatedDate = new Date(date);
    const month = monthName(formatedDate);
    const year = formatedDate.getFullYear();
    const key = `${month}-${year}`;

    days[key] = (days[key] || 0) + count;
    return days;
  }, {});
};

const monthName = (date: Date) => date.toLocaleString('en-us', { month: 'short' });

export const calculateDateTendencies: (
  commits: IRepoCommits[]
) => [number | string, number | string] = (commits) => {
  const dates = commits.reduce((repos, repo) => {
    if (!repo.defaultBranchRef) return repos;

    const { nodes } = repo.defaultBranchRef.target.history;
    const datesOfRepo = nodes.reduce(
      (result, commit) => [...result, commit.committedDate],
      Array<string>()
    );

    return [...repos, ...datesOfRepo];
  }, Array<string>());

  const formatted = dates.map((date) => new Date(date));
  const hours = formatted.map((date) => date.getHours());
  const daysOfWeek = formatted.map((date) => date.getDay());

  return [mode(hours) || 'Undetermined', mode(daysOfWeek) || 'Undetermined'];
};

export const calculateLangTendencies: (langs: IRepoLang[]) => string = (langs) => {
  const result = langs.reduce((all, lang) => {
    if (!lang.primaryLanguage) return all;
    return [...all, lang.primaryLanguage.name];
  }, Array<string>());

  return mode(result) || 'Undetermined';
};
