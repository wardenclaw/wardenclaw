import type { Locale } from '@/lib/translations';
import { t } from '@/lib/translations';

interface RiskWarningProps {
  locale: Locale;
}

export default function RiskWarning({ locale }: RiskWarningProps) {
  const tr = t(locale);
  return (
    <div className="risk-banner rounded-lg my-8">
      <div className="flex items-start gap-3">
        <span className="text-claw-500 text-lg leading-none mt-0.5">⚠</span>
        <p className="text-sm leading-relaxed">{tr.common.riskWarning}</p>
      </div>
    </div>
  );
}
