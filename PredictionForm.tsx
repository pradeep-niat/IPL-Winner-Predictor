
'use client';

import { useState } from 'react';

const IPL_TEAMS = [
  'Mumbai Indians',
  'Chennai Super Kings', 
  'Royal Challengers Bangalore',
  'Kolkata Knight Riders',
  'Delhi Capitals',
  'Punjab Kings',
  'Rajasthan Royals',
  'Sunrisers Hyderabad',
  'Gujarat Titans',
  'Lucknow Super Giants'
];

const VENUES = [
  'Wankhede Stadium, Mumbai',
  'M.A. Chidambaram Stadium, Chennai',
  'Eden Gardens, Kolkata',
  'Feroz Shah Kotla, Delhi',
  'Rajiv Gandhi International Stadium, Hyderabad',
  'Punjab Cricket Association Stadium, Mohali',
  'Sawai Mansingh Stadium, Jaipur',
  'M. Chinnaswamy Stadium, Bangalore'
];

export default function PredictionForm({ onSubmit, isLoading }) {
  const [formData, setFormData] = useState({
    team1: '',
    team2: '',
    venue: '',
    team1RecentForm: '5',
    team2RecentForm: '5',
    headToHeadWinner: '',
    venueAdvantage: '',
    team1KeyPlayers: '7',
    team2KeyPlayers: '7',
    pitchType: 'balanced',
    weatherCondition: 'clear',
    tossWinner: '',
    tossDecision: 'bat',
    team1BowlingStrength: 'good',
    team2BowlingStrength: 'good',
    team1SpinStrength: 'good',
    team2SpinStrength: 'good'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.team1 || !formData.team2 || formData.team1 === formData.team2) {
      alert('Please select two different teams');
      return;
    }
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8">
      <div className="space-y-8">
        {/* Team Selection */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Team 1 *
            </label>
            <div className="relative">
              <select
                name="team1"
                value={formData.team1}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white pr-8"
              >
                <option value="">Select Team 1</option>
                {IPL_TEAMS.map(team => (
                  <option key={team} value={team}>{team}</option>
                ))}
              </select>
              <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 flex items-center justify-center"></i>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Team 2 *
            </label>
            <div className="relative">
              <select
                name="team2"
                value={formData.team2}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white pr-8"
              >
                <option value="">Select Team 2</option>
                {IPL_TEAMS.filter(team => team !== formData.team1).map(team => (
                  <option key={team} value={team}>{team}</option>
                ))}
              </select>
              <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 flex items-center justify-center"></i>
            </div>
          </div>
        </div>

        {/* Venue */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            Venue
          </label>
          <div className="relative">
            <select
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white pr-8"
            >
              <option value="">Select Venue</option>
              {VENUES.map(venue => (
                <option key={venue} value={venue}>{venue}</option>
              ))}
            </select>
            <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 flex items-center justify-center"></i>
          </div>
        </div>

        {/* Recent Form */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              {formData.team1 || 'Team 1'} Recent Form (1-10)
            </label>
            <input
              type="range"
              name="team1RecentForm"
              min="1"
              max="10"
              value={formData.team1RecentForm}
              onChange={handleChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>Poor (1)</span>
              <span className="font-semibold text-blue-600">{formData.team1RecentForm}</span>
              <span>Excellent (10)</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              {formData.team2 || 'Team 2'} Recent Form (1-10)
            </label>
            <input
              type="range"
              name="team2RecentForm"
              min="1"
              max="10"
              value={formData.team2RecentForm}
              onChange={handleChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>Poor (1)</span>
              <span className="font-semibold text-blue-600">{formData.team2RecentForm}</span>
              <span>Excellent (10)</span>
            </div>
          </div>
        </div>

        {/* Head to Head & Venue Advantage */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Head-to-Head Winner (Recent)
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="headToHeadWinner"
                  value={formData.team1}
                  checked={formData.headToHeadWinner === formData.team1}
                  onChange={handleChange}
                  className="mr-3"
                />
                {formData.team1 || 'Team 1'}
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="headToHeadWinner"
                  value={formData.team2}
                  checked={formData.headToHeadWinner === formData.team2}
                  onChange={handleChange}
                  className="mr-3"
                />
                {formData.team2 || 'Team 2'}
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="headToHeadWinner"
                  value=""
                  checked={formData.headToHeadWinner === ''}
                  onChange={handleChange}
                  className="mr-3"
                />
                Even/Unknown
              </label>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Venue Advantage
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="venueAdvantage"
                  value={formData.team1}
                  checked={formData.venueAdvantage === formData.team1}
                  onChange={handleChange}
                  className="mr-3"
                />
                {formData.team1 || 'Team 1'}
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="venueAdvantage"
                  value={formData.team2}
                  checked={formData.venueAdvantage === formData.team2}
                  onChange={handleChange}
                  className="mr-3"
                />
                {formData.team2 || 'Team 2'}
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="venueAdvantage"
                  value=""
                  checked={formData.venueAdvantage === ''}
                  onChange={handleChange}
                  className="mr-3"
                />
                Neutral
              </label>
            </div>
          </div>
        </div>

        {/* Key Players Available */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              {formData.team1 || 'Team 1'} Key Players Available (out of 11)
            </label>
            <input
              type="range"
              name="team1KeyPlayers"
              min="1"
              max="11"
              value={formData.team1KeyPlayers}
              onChange={handleChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>1</span>
              <span className="font-semibold text-blue-600">{formData.team1KeyPlayers}</span>
              <span>11</span>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              {formData.team2 || 'Team 2'} Key Players Available (out of 11)
            </label>
            <input
              type="range"
              name="team2KeyPlayers"
              min="1"
              max="11"
              value={formData.team2KeyPlayers}
              onChange={handleChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-sm text-gray-500 mt-1">
              <span>1</span>
              <span className="font-semibold text-blue-600">{formData.team2KeyPlayers}</span>
              <span>11</span>
            </div>
          </div>
        </div>

        {/* Match Conditions */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Pitch Type
            </label>
            <div className="relative">
              <select
                name="pitchType"
                value={formData.pitchType}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white pr-8"
              >
                <option value="batting-friendly">Batting Friendly</option>
                <option value="bowling-friendly">Bowling Friendly</option>
                <option value="balanced">Balanced</option>
                <option value="spin-friendly">Spin Friendly</option>
              </select>
              <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 flex items-center justify-center"></i>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Weather Condition
            </label>
            <div className="relative">
              <select
                name="weatherCondition"
                value={formData.weatherCondition}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white pr-8"
              >
                <option value="clear">Clear/Sunny</option>
                <option value="overcast">Overcast</option>
                <option value="humid">Humid</option>
                <option value="windy">Windy</option>
              </select>
              <i className="ri-arrow-down-s-line absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 flex items-center justify-center"></i>
            </div>
          </div>
        </div>

        {/* Toss */}
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Toss Winner
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="tossWinner"
                  value={formData.team1}
                  checked={formData.tossWinner === formData.team1}
                  onChange={handleChange}
                  className="mr-3"
                />
                {formData.team1 || 'Team 1'}
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="tossWinner"
                  value={formData.team2}
                  checked={formData.tossWinner === formData.team2}
                  onChange={handleChange}
                  className="mr-3"
                />
                {formData.team2 || 'Team 2'}
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="tossWinner"
                  value=""
                  checked={formData.tossWinner === ''}
                  onChange={handleChange}
                  className="mr-3"
                />
                Not decided yet
              </label>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Toss Decision
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="tossDecision"
                  value="bat"
                  checked={formData.tossDecision === 'bat'}
                  onChange={handleChange}
                  className="mr-3"
                />
                Bat First
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="tossDecision"
                  value="bowl"
                  checked={formData.tossDecision === 'bowl'}
                  onChange={handleChange}
                  className="mr-3"
                />
                Bowl First
              </label>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3"></div>
                Calculating Prediction...
              </div>
            ) : (
              'Get Match Prediction'
            )}
          </button>
        </div>
      </div>
    </form>
  );
}
