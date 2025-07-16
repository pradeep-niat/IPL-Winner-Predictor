
'use client';

export default function PredictionResult({ result, onReset }) {
  const getConfidenceColor = (confidence) => {
    switch (confidence) {
      case 'High': return 'text-green-600 bg-green-100';
      case 'Medium': return 'text-yellow-600 bg-yellow-100';
      case 'Low': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getProbabilityColor = (probability) => {
    if (probability >= 60) return 'from-green-500 to-green-600';
    if (probability >= 50) return 'from-yellow-500 to-yellow-600';
    return 'from-red-500 to-red-600';
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="ri-trophy-line text-white text-2xl w-8 h-8 flex items-center justify-center"></i>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Match Prediction Result
        </h2>
        <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${getConfidenceColor(result.confidence)}`}>
          <i className="ri-shield-check-line mr-2 w-4 h-4 flex items-center justify-center"></i>
          {result.confidence} Confidence
        </div>
      </div>

      {/* Teams Comparison */}
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Team 1 */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{result.team1}</h3>
            <div className="relative mb-4">
              <div className="w-32 h-32 mx-auto rounded-full border-8 border-gray-200 flex items-center justify-center">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${getProbabilityColor(result.team1Probability)}`} 
                     style={{
                       background: `conic-gradient(from 0deg, rgb(59, 130, 246) 0%, rgb(59, 130, 246) ${result.team1Probability}%, rgb(229, 231, 235) ${result.team1Probability}%, rgb(229, 231, 235) 100%)`
                     }}>
                </div>
                <div className="relative bg-white rounded-full w-24 h-24 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-800">{result.team1Probability}%</span>
                </div>
              </div>
            </div>
            {result.winner === result.team1 && (
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                <i className="ri-trophy-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                Predicted Winner
              </div>
            )}
          </div>
        </div>

        {/* Team 2 */}
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-800 mb-4">{result.team2}</h3>
            <div className="relative mb-4">
              <div className="w-32 h-32 mx-auto rounded-full border-8 border-gray-200 flex items-center justify-center">
                <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${getProbabilityColor(result.team2Probability)}`} 
                     style={{
                       background: `conic-gradient(from 0deg, rgb(147, 51, 234) 0%, rgb(147, 51, 234) ${result.team2Probability}%, rgb(229, 231, 235) ${result.team2Probability}%, rgb(229, 231, 235) 100%)`
                     }}>
                </div>
                <div className="relative bg-white rounded-full w-24 h-24 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-800">{result.team2Probability}%</span>
                </div>
              </div>
            </div>
            {result.winner === result.team2 && (
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold">
                <i className="ri-trophy-line mr-2 w-4 h-4 flex items-center justify-center"></i>
                Predicted Winner
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Probability Bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-gray-600">{result.team1}</span>
          <span className="text-sm font-medium text-gray-600">{result.team2}</span>
        </div>
        <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-1000"
            style={{ width: `${result.team1Probability}%` }}
          ></div>
          <div 
            className="absolute right-0 top-0 h-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-1000"
            style={{ width: `${result.team2Probability}%` }}
          ></div>
        </div>
        <div className="flex justify-center mt-2">
          <span className="text-xs text-gray-500">Win Probability</span>
        </div>
      </div>

      {/* Key Factors */}
      <div className="bg-gray-50 rounded-xl p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <i className="ri-list-check-2 mr-2 w-5 h-5 flex items-center justify-center"></i>
          Key Factors Analyzed
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-start">
              <i className="ri-line-chart-line text-blue-600 mr-3 mt-1 w-4 h-4 flex items-center justify-center"></i>
              <div>
                <span className="font-medium text-gray-700">Recent Form:</span>
                <p className="text-sm text-gray-600">{result.factors.recentForm}</p>
              </div>
            </div>
            <div className="flex items-start">
              <i className="ri-history-line text-blue-600 mr-3 mt-1 w-4 h-4 flex items-center justify-center"></i>
              <div>
                <span className="font-medium text-gray-700">Head-to-Head:</span>
                <p className="text-sm text-gray-600">{result.factors.headToHead}</p>
              </div>
            </div>
            <div className="flex items-start">
              <i className="ri-map-pin-line text-blue-600 mr-3 mt-1 w-4 h-4 flex items-center justify-center"></i>
              <div>
                <span className="font-medium text-gray-700">Venue Advantage:</span>
                <p className="text-sm text-gray-600">{result.factors.venue}</p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start">
              <i className="ri-coins-line text-blue-600 mr-3 mt-1 w-4 h-4 flex items-center justify-center"></i>
              <div>
                <span className="font-medium text-gray-700">Toss Impact:</span>
                <p className="text-sm text-gray-600">{result.factors.toss}</p>
              </div>
            </div>
            <div className="flex items-start">
              <i className="ri-cloud-line text-blue-600 mr-3 mt-1 w-4 h-4 flex items-center justify-center"></i>
              <div>
                <span className="font-medium text-gray-700">Conditions:</span>
                <p className="text-sm text-gray-600">{result.factors.conditions}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={onReset}
          className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-200 whitespace-nowrap"
        >
          <i className="ri-refresh-line mr-2 w-4 h-4 flex items-center justify-center"></i>
          Make Another Prediction
        </button>
        <button
          onClick={() => window.print()}
          className="flex-1 bg-gray-100 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-200 transition-colors whitespace-nowrap"
        >
          <i className="ri-printer-line mr-2 w-4 h-4 flex items-center justify-center"></i>
          Save Result
        </button>
      </div>

      {/* Disclaimer */}
      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800">
          <i className="ri-information-line mr-2 w-4 h-4 flex items-center justify-center"></i>
          <strong>Disclaimer:</strong> This prediction is based on statistical analysis and machine learning algorithms. 
          Actual match results may vary due to unpredictable factors in sports.
        </p>
      </div>
    </div>
  );
}
