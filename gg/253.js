/*
Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.
For example,
Given [[0, 30],[5, 10],[15, 20]],
return 2.
*/

class Solution {
public:
    int minMeetingRooms(vector<Interval>& intervals) {
        vector<int> starts, ends;
        int res = 0, endpos = 0;
        for (auto a : intervals) {
            starts.push_back(a.start);
            ends.push_back(a.end);
        }
        sort(starts.begin(), starts.end());
        sort(ends.begin(), ends.end());
        for (int i = 0; i < intervals.size(); ++i) {
            if (starts[i] < ends[endpos]) ++res;
            else ++endpos;
        }
        return res;
    }
};

//

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {number}
 */

var minMeetingRooms = function(intervals) {
    const schedule = {};

    intervals.forEach( (interval) => {
        schedule[interval.start] = schedule[interval.start] || 0;
        schedule[interval.start]++;

        schedule[interval.end] = schedule[interval.end] || 0;
        schedule[interval.end]--;
    });

    let maxRooms = 0;
    let rooms = 0;
    const time = Object.keys(schedule);
    time.sort((a,b) => a-b);
    for(let i of time) {
        rooms += schedule[i];
        maxRooms = Math.max(maxRooms, rooms);
    }

    return maxRooms;
};
