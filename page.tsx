
'use client';

import Link from 'next/link';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const teamStats = [
  { team: 'Mumbai Indians', wins: 28, losses: 12, winRate: 70, titles: 5, color: '#1e40af' },
  { team: 'Chennai Super Kings', wins: 26, losses: 14, winRate: 65, titles: 4, color: '#eab308' },
  { team: 'Kolkata Knight Riders', wins: 22, losses: 18, winRate: 55, titles: 2, color: '#7c3aed' },
  { team: 'Royal Challengers Bangalore', wins: 20, losses: 20, winRate: 50, titles: 0, color: '#dc2626' },
  { team: 'Delhi Capitals', wins: 18, losses: 22, winRate: 45, titles: 0, color: '#1e40af' },
  { team: 'Rajasthan Royals', wins: 16, losses: 24, winRate: 40, titles: 1, color: '#ec4899' },
  { team: 'Punjab Kings', wins: 15, losses: 25, winRate: 37, titles: 0, color: '#dc2626' },
  { team: 'Sunrisers Hyderabad', wins: 14, losses: 26, winRate: 35, titles: 1, color: '#ea580c' }
];

const seasonData = [
  { season: '2018', matches: 60, totalRuns: 22578, sixes: 876, fours: 2134 },
  { season: '2019', matches: 60, totalRuns: 23781, sixes: 963, fours: 2245 },
  { season: '2020', matches: 60, totalRuns: 21583, sixes: 833, fours: 2087 },
  { season: '2021', matches: 60, totalRuns: 22453, sixes: 901, fours: 2156 },
  { season: '2022', matches: 74, totalRuns: 27824, sixes: 1178, fours: 2634 },
  { season: '2023', matches: 74, totalRuns: 28934, sixes: 1289, fours: 2789 },
  { season: '2024', matches: 74, totalRuns: 29456, sixes: 1345, fours: 2834 }
];

const venueStats = [
  { name: 'Wankhede Stadium', matches: 89, avgScore: 178, color: '#0284c7' },
  { name: 'Eden Gardens', matches: 76, avgScore: 165, color: '#7c3aed' },
  { name: 'M. Chinnaswamy Stadium', matches: 72, avgScore: 182, color: '#dc2626' },
  { name: 'Feroz Shah Kotla', matches: 68, avgScore: 158, color: '#1e40af' },
  { name: 'Rajiv Gandhi Stadium', matches: 65, avgScore: 171, color: '#ea580c' }
];

export default function StatsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <i className="ri-trophy-line text-white text-xl w-6 h-6 flex items-center justify-center"></i>
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                IPL Win Predictor
              </h1>
            </div>
            <nav className="flex space-x-6">
              <Link href="/" className="text-gray-600 hover:text-blue-600 cursor-pointer">Home</Link>
              <Link href="/predictor" className="text-gray-600 hover:text-blue-600 cursor-pointer">Predictor</Link>
              <Link href="/stats" className="text-blue-600 font-medium cursor-pointer">Statistics</Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            IPL Statistics & Analytics
          </h1>
          <p className="text-lg text-gray-600">
            Comprehensive data analysis of IPL teams, seasons, and performance metrics
          </p>
        </div>

        {/* Team Performance Overview */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <i className="ri-team-line mr-3 w-6 h-6 flex items-center justify-center"></i>
            Team Performance Overview
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Win Rate Chart */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Win Rate Comparison</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={teamStats}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="team" 
                    angle={-45}
                    textAnchor="end"
                    height={80}
                    fontSize={12}
                  />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="winRate" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Titles Distribution */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">IPL Titles Distribution</h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={teamStats.filter(team => team.titles > 0)}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="titles"
                    label={({ team, titles }) => `${team.split(' ')[0]} (${titles})`}
                  >
                    {teamStats.filter(team => team.titles > 0).map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Season Trends */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <i className="ri-line-chart-line mr-3 w-6 h-6 flex items-center justify-center"></i>
            Season-wise Trends
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Total Runs Trend */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Total Runs per Season</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={seasonData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="season" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="totalRuns" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.3} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Boundaries Trend */}
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-4">Boundaries per Season</h3>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={seasonData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="season" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="sixes" stackId="1" stroke="#dc2626" fill="#dc2626" fillOpacity={0.7} />
                  <Area type="monotone" dataKey="fours" stackId="1" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.7} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Team Statistics Table */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <i className="ri-table-line mr-3 w-6 h-6 flex items-center justify-center"></i>
            Detailed Team Statistics
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="py-3 px-4 font-semibold text-gray-700">Team</th>
                  <th className="py-3 px-4 font-semibold text-gray-700">Matches Won</th>
                  <th className="py-3 px-4 font-semibold text-gray-700">Matches Lost</th>
                  <th className="py-3 px-4 font-semibold text-gray-700">Win Rate</th>
                  <th className="py-3 px-4 font-semibold text-gray-700">Titles</th>
                  <th className="py-3 px-4 font-semibold text-gray-700">Status</th>
                </tr>
              </thead>
              <tbody>
                {teamStats.map((team, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <div 
                          className="w-4 h-4 rounded-full mr-3"
                          style={{ backgroundColor: team.color }}
                        ></div>
                        <span className="font-medium">{team.team}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-green-600 font-semibold">{team.wins}</td>
                    <td className="py-4 px-4 text-red-600 font-semibold">{team.losses}</td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <div className="flex-1 bg-gray-200 rounded-full h-2 mr-3">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${team.winRate}%` }}
                          ></div>
                        </div>
                        <span className="font-semibold">{team.winRate}%</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center">
                        <i className="ri-trophy-line text-yellow-500 mr-2 w-4 h-4 flex items-center justify-center"></i>
                        <span className="font-semibold">{team.titles}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${ 
                        team.winRate >= 60 ? 'bg-green-100 text-green-800' :
                        team.winRate >= 50 ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {team.winRate >= 60 ? 'Strong' : team.winRate >= 50 ? 'Average' : 'Weak'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Venue Analysis */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
            <i className="ri-map-pin-line mr-3 w-6 h-6 flex items-center justify-center"></i>
            Venue Analysis
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {venueStats.map((venue, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6">
                <h3 className="font-semibold text-gray-800 mb-3">{venue.name}</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Matches Played:</span>
                    <span className="font-semibold">{venue.matches}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Avg Score:</span>
                    <span className="font-semibold text-blue-600">{venue.avgScore}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full"
                      style={{ 
                        width: `${(venue.avgScore / 200) * 100}%`,
                        backgroundColor: venue.color
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <i className="ri-lightbulb-line mr-3 w-6 h-6 flex items-center justify-center"></i>
            Key Insights
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-xl p-4">
              <h3 className="font-semibold mb-2">Most Successful Team</h3>
              <p className="text-sm opacity-90">Mumbai Indians lead with 70% win rate and 5 titles</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <h3 className="font-semibold mb-2">Highest Scoring Venue</h3>
              <p className="text-sm opacity-90">M. Chinnaswamy Stadium averages 182 runs per innings</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <h3 className="font-semibold mb-2">Tournament Growth</h3>
              <p className="text-sm opacity-90">Total runs increased by 30% from 2018 to 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <i className="ri-trophy-line text-white text-lg w-5 h-5 flex items-center justify-center"></i>
            </div>
            <h3 className="text-xl font-bold">IPL Win Predictor</h3>
          </div>
          <p className="text-gray-400 mb-4">
            Comprehensive IPL statistics and analytics
          </p>
          <div className="border-t border-gray-800 pt-4">
            <p className="text-gray-400">&copy; 2024 IPL Win Predictor. All rights reserved.</p>
            <p className="mt-2 text-sm text-gray-500">Created by Pradeep Kumar S</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
