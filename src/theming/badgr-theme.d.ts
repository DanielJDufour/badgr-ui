
export interface BadgrTheme {
	/**
	 * URL to redirect users who visit the root of the domain to, used as an "info page"
	 */
	alternateLandingUrl?: string;

	/**
	 * Welcome message on auth screen
	 */
	welcomeMessage: string;

	/**
	 * A configurable short name for the service. Default: "Badgr"
	 */
	serviceName: string;

	/**
	 * Shows the "Powered by Badgr" link
	 */
	showPoweredByBadgr: boolean;

	/**
	 *
	 */
	hideMarketingOptIn?: boolean;

	/**
	 * Shows "Provided by ____ link
	 */
	providedBy?: {
		name: string;
		url: string
	}

	/**
	 * Shows the "API Documentation" link
	 */
	showApiDocsLink: boolean;

	/**
	 * Links used in the footer
	 */
	termsOfServiceLink?: string;
	privacyPolicyLink?: string;
	dataProcessorTermsLink?: string;

	/*
	 * Help link shown in new terms of service modal dialog
	 */
	termsHelpLink?: string;

	/**
	 * Image to use for the main screen logo
	 */
	logoImg: {
		small: string;
		desktop: string;
	}

	/**
	 * A data URL containing the loading image -- may be a data url so it loads immediately
	 */
	loadingImg: {
		imageUrl: string;
		width?: number;
		height?: number;
	};

	/**
	 * Custom Menu Setup
	 */
	customMenu?: {
		label: string;
		items: {
			label: string;
			url: string;
		}[];
	},

	/**
	 * Custom Favicons
	 */
	favicons?: {
		rel: string;
		href: string;
		sizes?: string;
	}[],

	useColorNavbar: boolean;
	/**
	 * properties
	 */
	cssCustomProps?: {
		"--brand-hue"?: string;
		"--brand-saturation"?: string;
		"--brand-lightness"?: string;
		"--color-theme"?: string;
	},
}
