/*
Copyright (C) 2025 QuantumNous

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

import React, { useState, useEffect, useContext } from "react";
import { Card, Typography, Avatar } from "@douyinfe/semi-ui";
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";
import { UserContext } from "../../../../context/User";
import { normalizeLanguage } from "../../../../i18n/language";

const PreferencesSettings = ({ t }) => {
	const { i18n } = useTranslation();
	const [userState] = useContext(UserContext);
	const [currentLanguage, setCurrentLanguage] = useState(
		normalizeLanguage(i18n.language) || "en",
	);

	useEffect(() => {
		if (userState?.user?.setting) {
			try {
				const settings = JSON.parse(userState.user.setting);
				if (settings.language !== "en") {
					settings.language = "en";
				}
				const lang = normalizeLanguage(settings.language);
				setCurrentLanguage(lang);
				if (i18n.language !== lang) {
					i18n.changeLanguage(lang);
				}
			} catch (e) {
				setCurrentLanguage("en");
			}
		}
	}, [userState?.user?.setting, i18n]);

	return (
		<Card className="!rounded-2xl shadow-sm border-0">
			{/* Card Header */}
			<div className="flex items-center mb-4">
				<Avatar size="small" color="violet" className="mr-3 shadow-md">
					<Languages size={16} />
				</Avatar>
				<div>
					<Typography.Text className="text-lg font-medium">
						{t("偏好设置")}
					</Typography.Text>
					<div className="text-xs text-gray-600 dark:text-gray-400">
						{t("界面语言和其他个人偏好")}
					</div>
				</div>
			</div>
			{/* Language Setting Card */}
			<Card className="!rounded-xl border dark:border-gray-700">
				<div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between gap-4">
					<div className="flex items-start w-full sm:w-auto">
						<div className="w-12 h-12 rounded-full bg-violet-50 dark:bg-violet-900/30 flex items-center justify-center mr-4 flex-shrink-0">
							<Languages
								size={20}
								className="text-violet-600 dark:text-violet-400"
							/>
						</div>
					<div>
							<Typography.Title heading={6} className="mb-1">
								{t("语言偏好")}
							</Typography.Title>
							<Typography.Text type="tertiary" className="text-sm">
								English is fixed as the only available interface language.
							</Typography.Text>
						</div>
					</div>
					<div className="text-sm font-medium text-gray-700 dark:text-gray-200">
						{currentLanguage.toUpperCase()}
					</div>
				</div>
			</Card>

			{/* Additional info */}
			<div className="mt-4 text-xs text-gray-500 dark:text-gray-400">
				<Typography.Text type="tertiary">
					English is applied across the site.
				</Typography.Text>
			</div>
		</Card>
	);
};

export default PreferencesSettings;
