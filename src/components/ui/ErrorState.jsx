import { ServerCrash, RotateCw } from 'lucide-react';

function ErrorState({ error }) {
  const statusCode = error?.status || 'Unknown';
  const message = error?.errorMessage || 'An unexpected error occurred';

  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-md mx-auto my-12 p-8 bg-[#161b22] border border-[#30363d] rounded-2xl text-center shadow-xl">
      <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-full text-red-400 mb-5">
        <ServerCrash className="w-8 h-8" />
      </div>

      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-500/10 text-red-400 border border-red-500/20 mb-3">
        Error Code: {statusCode}
      </div>

      <h2 className="text-lg font-semibold text-neutral-200 mb-2">
        Data Fetch Failed
      </h2>

      <p className="text-sm text-gray-400 mb-6 leading-relaxed">
        {message}. Please verify your connection or application configurations
        and try again.
      </p>

      <button
        onClick={handleRetry}
        className="inline-flex items-center gap-2 px-4 py-2 bg-[#21262d] border border-[#30363d] hover:bg-[#30363d] hover:border-[#8b949e] active:bg-[#282e38] text-neutral-200 text-sm font-medium rounded-lg transition-all cursor-pointer focus:outline-none"
      >
        <RotateCw className="w-4 h-4" />
        Retry Request
      </button>
    </div>
  );
}

export default ErrorState;
