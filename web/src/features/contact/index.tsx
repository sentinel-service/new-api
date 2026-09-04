/*
Copyright (C) 2023-2026 QuantumNous

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as
published by the Free Software Foundation, either version 3 of the
License, or (at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

For commercial licensing, please contact support@quantumnous.com
*/
import { Mail, MessageCircle } from 'lucide-react'
import { useTranslation } from 'react-i18next'

import { PublicLayout } from '@/components/layout'

const SUPPORT_EMAIL = 'apirouterai@gmail.com'
const SUPPORT_WECHAT_ID = 'wxid_bx86mr5cg03y22'

export function Contact() {
  const { t } = useTranslation()

  return (
    <PublicLayout>
      <main className='mx-auto w-full max-w-4xl px-4 py-12 sm:py-16'>
        <div className='mb-8 space-y-2 text-center'>
          <h1 className='text-3xl font-semibold tracking-tight'>
            {t('footer.columns.about.links.contact')}
          </h1>
          <p className='text-muted-foreground'>
            {t('Questions, collaboration, or feedback are always welcome.')}
          </p>
        </div>

        <div className='grid gap-5 md:grid-cols-2'>
          <a
            href={`mailto:${SUPPORT_EMAIL}`}
            className='border-border/60 bg-card hover:border-primary/40 group rounded-2xl border p-7 transition-colors'
          >
            <Mail aria-hidden='true' className='text-primary mb-5 size-10' />
            <h2 className='mb-2 text-xl font-medium'>{t('Email')}</h2>
            <p className='text-muted-foreground mb-5 text-sm'>
              {t('Send us an email')}
            </p>
            <span className='group-hover:text-primary font-medium transition-colors'>
              {SUPPORT_EMAIL}
            </span>
          </a>

          <section className='border-border/60 bg-card rounded-2xl border p-7'>
            <MessageCircle
              aria-hidden='true'
              className='text-primary mb-5 size-10'
            />
            <h2 className='mb-2 text-xl font-medium'>{t('WeChat')}</h2>
            <p className='text-muted-foreground mb-5 text-sm'>
              {t('Contact customer support on WeChat')}
            </p>
            <p className='font-medium'>
              <span className='text-muted-foreground'>{t('WeChat ID')}: </span>
              {SUPPORT_WECHAT_ID}
            </p>
          </section>
        </div>
      </main>
    </PublicLayout>
  )
}
