// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project a8d1bf1754323587 "Xtract Template (copy)", do not edit manually */
"use client";

/**
 * @typedef Locale
 * string
 */

/**
 * @typedef {{
 * children?: React.ReactNode
 * locale?: Locale
 * style?: React.CSSProperties
 * className?: string
 * id?: string
 * ref?: any
 * width?: any
 * height?: any
 * layoutId?: string
 * variant?: 'Basic' | 'Small' // Variant
 * title?: string // Title
 * background?: string // Background
 * arrow ?: boolean // arrow 
 * link?: string // Link
}} Props

 */

/**
 * @type {import("unframer").UnframerBreakpoint}
 * Represents a responsive breakpoint for unframer.
 */

/**
 * @typedef VariantsMap
 * Partial record of UnframerBreakpoint to Props.variant, with a mandatory 'base' key.
 * { [key in UnframerBreakpoint]?: Props['variant'] } & { base: Props['variant'] }
 */
import {
	Icon,
	className as className2,
	css as css2,
	fonts as fonts2,
} from "./chunks/chunk-IYARRBZ7.js";
import { className, css, fonts } from "./chunks/chunk-QY5UAKSC.js";
import "./chunks/chunk-BVM6H744.js";
import { routes } from "./chunks/chunk-A46GJBWP.js";

// virtual:cta-button
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framer.com/m/CTA-Button-sBY0.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import {
	addFonts,
	addPropertyControls,
	ComponentViewportProvider,
	ControlType,
	cx,
	getFonts,
	getFontsFromSharedStyle,
	Link,
	RichText,
	SmartComponentScopedContainer,
	useComponentViewport,
	useLocaleInfo,
	useVariantState,
	withCSS,
} from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
import { useRef } from "react";
var FeatherFonts = getFonts(Icon);
var enabledGestures = {
	aTOd2sDSm: {
		hover: true,
	},
	NJ0cRlRKh: {
		hover: true,
	},
};
var cycleOrder = ["NJ0cRlRKh", "aTOd2sDSm"];
var serializationHash = "framer-CjMlx";
var variantClassNames = {
	aTOd2sDSm: "framer-v-1dhrp5e",
	NJ0cRlRKh: "framer-v-1e5l598",
};
function addPropertyOverrides(overrides, ...variants) {
	const nextOverrides = {};
	variants?.forEach(
		(variant) => variant && Object.assign(nextOverrides, overrides[variant]),
	);
	return nextOverrides;
}
var transition1 = {
	damping: 60,
	delay: 0,
	mass: 1,
	stiffness: 300,
	type: "spring",
};
var Transition = ({ value, children }) => {
	const config = React.useContext(MotionConfigContext);
	const transition = value ?? config.transition;
	const contextValue = React.useMemo(
		() => ({
			...config,
			transition,
		}),
		[JSON.stringify(transition)],
	);
	return (
		<MotionConfigContext.Provider value={contextValue}>
			{children}
		</MotionConfigContext.Provider>
	);
};
var Variants = motion.create(React.Fragment);
var humanReadableVariantMap = {
	Basic: "NJ0cRlRKh",
	Small: "aTOd2sDSm",
};
var getProps = ({
	arrow,
	background,
	height,
	id,
	link,
	title,
	width,
	...props
}) => {
	return {
		...props,
		ae3kdG3b0:
			background ??
			props.ae3kdG3b0 ??
			"var(--token-a888adc2-3d05-4d6f-88b7-8dab97418795, rgb(129, 74, 200))",
		IHCtoN6iC: arrow ?? props.IHCtoN6iC ?? true,
		NAbd17i0q: title ?? props.NAbd17i0q ?? "Get in touch",
		t90xdY6CE: link ?? props.t90xdY6CE,
		variant:
			humanReadableVariantMap[props.variant] ?? props.variant ?? "NJ0cRlRKh",
	};
};
var createLayoutDependency = (props, variants) => {
	if (props.layoutDependency)
		return variants.join("-") + props.layoutDependency;
	return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref) {
	const fallbackRef = useRef(null);
	const refBinding = ref ?? fallbackRef;
	const defaultLayoutId = React.useId();
	const { activeLocale, setLocale } = useLocaleInfo();
	const componentViewport = useComponentViewport();
	const {
		style,
		className: className3,
		layoutId,
		variant,
		NAbd17i0q,
		ae3kdG3b0,
		IHCtoN6iC,
		t90xdY6CE,
		...restProps
	} = getProps(props);
	const {
		baseVariant,
		classNames,
		clearLoadingGesture,
		gestureHandlers,
		gestureVariant,
		isLoading,
		setGestureState,
		setVariant,
		variants,
	} = useVariantState({
		cycleOrder,
		defaultVariant: "NJ0cRlRKh",
		enabledGestures,
		ref: refBinding,
		variant,
		variantClassNames,
	});
	const layoutDependency = createLayoutDependency(props, variants);
	const sharedStyleClassNames = [className2, className];
	const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
	return (
		<LayoutGroup id={layoutId ?? defaultLayoutId}>
			<Variants animate={variants} initial={false}>
				<Transition value={transition1}>
					<Link
						href={t90xdY6CE}
						motionChild={true}
						nodeId={"NJ0cRlRKh"}
						scopeId={"gtiWKd4GS"}
						smoothScroll={true}
					>
						<motion.a
							{...restProps}
							{...gestureHandlers}
							className={`${cx(scopingClassNames, "framer-1e5l598", className3, classNames)} framer-x05rpg`}
							data-border={true}
							data-framer-name={"Basic"}
							layoutDependency={layoutDependency}
							layoutId={"NJ0cRlRKh"}
							ref={refBinding}
							style={{
								"--border-bottom-width": "1px",
								"--border-color":
									"var(--token-6839e435-35f3-4ab3-b723-e98c27e525bc, rgba(255, 255, 255, 0.1))",
								"--border-left-width": "1px",
								"--border-right-width": "1px",
								"--border-style": "solid",
								"--border-top-width": "1px",
								backgroundColor: ae3kdG3b0,
								borderBottomLeftRadius: 6,
								borderBottomRightRadius: 6,
								borderTopLeftRadius: 6,
								borderTopRightRadius: 6,
								boxShadow:
									"0px 0.7065919983928324px 0.7065919983928324px -0.625px rgba(0, 0, 0, 0.14764), 0px 1.8065619053231785px 1.8065619053231785px -1.25px rgba(0, 0, 0, 0.14398), 0px 3.6217592146567767px 3.6217592146567767px -1.875px rgba(0, 0, 0, 0.13793), 0px 6.8655999097303715px 6.8655999097303715px -2.5px rgba(0, 0, 0, 0.12711), 0px 13.646761411524492px 13.646761411524492px -3.125px rgba(0, 0, 0, 0.10451), 0px 30px 30px -3.75px rgba(0, 0, 0, 0.05)",
								...style,
							}}
							variants={{
								"NJ0cRlRKh-hover": {
									"--border-color": "rgba(255, 255, 255, 0.3)",
								},
							}}
							{...addPropertyOverrides(
								{
									"aTOd2sDSm-hover": {
										"data-framer-name": void 0,
									},
									"NJ0cRlRKh-hover": {
										"data-framer-name": void 0,
									},
									aTOd2sDSm: {
										"data-framer-name": "Small",
									},
								},
								baseVariant,
								gestureVariant,
							)}
						>
							<motion.div
								className={"framer-1hhkatf"}
								data-framer-name={"Text Container"}
								layoutDependency={layoutDependency}
								layoutId={"aUsk2snBt"}
							>
								<motion.div
									className={"framer-15k178i"}
									data-framer-name={"1st state"}
									layoutDependency={layoutDependency}
									layoutId={"y3vLcCC14"}
								>
									<RichText
										__fromCanvasComponent={true}
										className={"framer-1bob7ie"}
										fonts={["Inter"]}
										layoutDependency={layoutDependency}
										layoutId={"KL3zWXp6f"}
										style={{
											"--framer-link-text-color": "rgb(0, 153, 255)",
											"--framer-link-text-decoration": "underline",
											"--framer-paragraph-spacing": "0px",
										}}
										text={NAbd17i0q}
										verticalAlignment={"top"}
										withExternalLayout={true}
										{...addPropertyOverrides(
											{
												aTOd2sDSm: {
													children: (
														<React.Fragment>
															<motion.p
																className={"framer-styles-preset-x6ge9v"}
																data-styles-preset={"D1fS_zrfW"}
															>
																{"Get in touch"}
															</motion.p>
														</React.Fragment>
													),
												},
											},
											baseVariant,
											gestureVariant,
										)}
									>
										<React.Fragment>
											<motion.p
												className={"framer-styles-preset-13sktzi"}
												data-styles-preset={"ZlAG9svTx"}
											>
												{"Get in touch"}
											</motion.p>
										</React.Fragment>
									</RichText>
									{IHCtoN6iC && (
										<ComponentViewportProvider>
											<SmartComponentScopedContainer
												className={"framer-1k6b1d-container"}
												isAuthoredByUser={true}
												isModuleExternal={true}
												layoutDependency={layoutDependency}
												layoutId={"oSlWUBAks-container"}
												nodeId={"oSlWUBAks"}
												rendersWithMotion={true}
												scopeId={"gtiWKd4GS"}
											>
												<Icon
													color={
														"var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))"
													}
													height={"100%"}
													iconSearch={"arrow-up-right"}
													iconSelection={"arrow-up-right"}
													id={"oSlWUBAks"}
													layoutId={"oSlWUBAks"}
													mirrored={false}
													selectByList={true}
													style={{
														height: "100%",
														width: "100%",
													}}
													width={"100%"}
												/>
											</SmartComponentScopedContainer>
										</ComponentViewportProvider>
									)}
								</motion.div>
								<motion.div
									className={"framer-4obbbk"}
									data-framer-name={"2nd state"}
									layoutDependency={layoutDependency}
									layoutId={"GIieEaFiA"}
								>
									<RichText
										__fromCanvasComponent={true}
										className={"framer-134t9n"}
										fonts={["Inter"]}
										layoutDependency={layoutDependency}
										layoutId={"EBmkoERUa"}
										style={{
											"--framer-link-text-color": "rgb(0, 153, 255)",
											"--framer-link-text-decoration": "underline",
											"--framer-paragraph-spacing": "0px",
										}}
										text={NAbd17i0q}
										verticalAlignment={"top"}
										withExternalLayout={true}
										{...addPropertyOverrides(
											{
												aTOd2sDSm: {
													children: (
														<React.Fragment>
															<motion.p
																className={"framer-styles-preset-x6ge9v"}
																data-styles-preset={"D1fS_zrfW"}
															>
																{"Get in touch"}
															</motion.p>
														</React.Fragment>
													),
												},
											},
											baseVariant,
											gestureVariant,
										)}
									>
										<React.Fragment>
											<motion.p
												className={"framer-styles-preset-13sktzi"}
												data-styles-preset={"ZlAG9svTx"}
											>
												{"Get in touch"}
											</motion.p>
										</React.Fragment>
									</RichText>
									{IHCtoN6iC && (
										<ComponentViewportProvider>
											<SmartComponentScopedContainer
												className={"framer-rgp1h6-container"}
												isAuthoredByUser={true}
												isModuleExternal={true}
												layoutDependency={layoutDependency}
												layoutId={"HRkbUA3uT-container"}
												nodeId={"HRkbUA3uT"}
												rendersWithMotion={true}
												scopeId={"gtiWKd4GS"}
											>
												<Icon
													color={
														"var(--token-55fce8bf-ab86-42dc-8b77-6335cf9cf588, rgb(255, 255, 255))"
													}
													height={"100%"}
													iconSearch={"arrow-up-right"}
													iconSelection={"arrow-right"}
													id={"HRkbUA3uT"}
													layoutId={"HRkbUA3uT"}
													mirrored={false}
													selectByList={true}
													style={{
														height: "100%",
														width: "100%",
													}}
													width={"100%"}
												/>
											</SmartComponentScopedContainer>
										</ComponentViewportProvider>
									)}
								</motion.div>
							</motion.div>
						</motion.a>
					</Link>
				</Transition>
			</Variants>
		</LayoutGroup>
	);
});
var css3 = [
	"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
	".framer-CjMlx.framer-x05rpg, .framer-CjMlx .framer-x05rpg { display: block; }",
	".framer-CjMlx.framer-1e5l598 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 9px 13px 9px 13px; position: relative; text-decoration: none; width: min-content; }",
	".framer-CjMlx .framer-1hhkatf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 18px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: min-content; }",
	".framer-CjMlx .framer-15k178i, .framer-CjMlx .framer-4obbbk { align-content: flex-end; align-items: flex-end; align-self: stretch; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: auto; }",
	".framer-CjMlx .framer-1bob7ie, .framer-CjMlx .framer-134t9n { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
	".framer-CjMlx .framer-1k6b1d-container, .framer-CjMlx .framer-rgp1h6-container { flex: none; height: 16px; position: relative; width: 16px; }",
	"@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-CjMlx.framer-1e5l598, .framer-CjMlx .framer-1hhkatf, .framer-CjMlx .framer-15k178i, .framer-CjMlx .framer-4obbbk { gap: 0px; } .framer-CjMlx.framer-1e5l598 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-CjMlx.framer-1e5l598 > :first-child, .framer-CjMlx .framer-15k178i > :first-child, .framer-CjMlx .framer-4obbbk > :first-child { margin-left: 0px; } .framer-CjMlx.framer-1e5l598 > :last-child, .framer-CjMlx .framer-15k178i > :last-child, .framer-CjMlx .framer-4obbbk > :last-child { margin-right: 0px; } .framer-CjMlx .framer-1hhkatf > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-CjMlx .framer-1hhkatf > :first-child { margin-top: 0px; } .framer-CjMlx .framer-1hhkatf > :last-child { margin-bottom: 0px; } .framer-CjMlx .framer-15k178i > *, .framer-CjMlx .framer-4obbbk > * { margin: 0px; margin-left: calc(5px / 2); margin-right: calc(5px / 2); } }",
	".framer-CjMlx.framer-v-1dhrp5e .framer-1hhkatf { height: 17px; }",
	".framer-CjMlx.framer-v-1e5l598.hover .framer-1hhkatf, .framer-CjMlx.framer-v-1dhrp5e.hover .framer-1hhkatf { justify-content: flex-end; }",
	...css2,
	...css,
	'.framer-CjMlx[data-border="true"]::after, .framer-CjMlx [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
];
var FramergtiWKd4GS = withCSS(Component, css3, "framer-CjMlx");
var stdin_default = FramergtiWKd4GS;
FramergtiWKd4GS.displayName = "CTA Button";
FramergtiWKd4GS.defaultProps = {
	height: 36,
	width: 124,
};
addPropertyControls(FramergtiWKd4GS, {
	variant: {
		options: ["NJ0cRlRKh", "aTOd2sDSm"],
		optionTitles: ["Basic", "Small"],
		title: "Variant",
		type: ControlType.Enum,
	},
	NAbd17i0q: {
		defaultValue: "Get in touch",
		displayTextArea: false,
		title: "Title",
		type: ControlType.String,
	},
	ae3kdG3b0: {
		defaultValue:
			'var(--token-a888adc2-3d05-4d6f-88b7-8dab97418795, rgb(129, 74, 200)) /* {"name":"Purple"} */',
		title: "Background",
		type: ControlType.Color,
	},
	IHCtoN6iC: {
		defaultValue: true,
		title: "arrow ",
		type: ControlType.Boolean,
	},
	t90xdY6CE: {
		title: "Link",
		type: ControlType.Link,
	},
});
addFonts(
	FramergtiWKd4GS,
	[
		{
			explicitInter: true,
			fonts: [
				{
					family: "Inter",
					source: "framer",
					style: "normal",
					unicodeRange:
						"U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F",
					url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2",
					weight: "400",
				},
				{
					family: "Inter",
					source: "framer",
					style: "normal",
					unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116",
					url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2",
					weight: "400",
				},
				{
					family: "Inter",
					source: "framer",
					style: "normal",
					unicodeRange: "U+1F00-1FFF",
					url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2",
					weight: "400",
				},
				{
					family: "Inter",
					source: "framer",
					style: "normal",
					unicodeRange: "U+0370-03FF",
					url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2",
					weight: "400",
				},
				{
					family: "Inter",
					source: "framer",
					style: "normal",
					unicodeRange:
						"U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF",
					url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2",
					weight: "400",
				},
				{
					family: "Inter",
					source: "framer",
					style: "normal",
					unicodeRange:
						"U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD",
					url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2",
					weight: "400",
				},
				{
					family: "Inter",
					source: "framer",
					style: "normal",
					unicodeRange:
						"U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB",
					url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2",
					weight: "400",
				},
			],
		},
		...FeatherFonts,
		...getFontsFromSharedStyle(fonts2),
		...getFontsFromSharedStyle(fonts),
	],
	{
		supportsExplicitInterCodegen: true,
	},
);

// virtual:cta-button
import { WithFramerBreakpoints } from "unframer";
import { jsx } from "react/jsx-runtime";
var locales = [];
var defaultResponsiveVariants = {
	base: "NJ0cRlRKh",
};
/** @type {function(Props): any} */
function ComponentWithRoot({ locale, ...rest }) {
	return (
		<ContextProviders
			routes={routes}
			framerSiteId={
				"a8d1bf17543235875742a4578f1d6b2cd82ea3d1960d650561752b6f8ce8433b"
			}
			locale={locale}
			locales={locales}
		>
			{jsx(stdin_default, {
				...rest,
			})}
		</ContextProviders>
	);
}
/**
 * Renders CtaButtonFramerComponent for all breakpoints with a variants map. Variant prop is inferred per breakpoint.
 * @function
 * @param {Omit<Props, 'variant'> & {variants?: VariantsMap}} props
 * @returns {any}
 */
ComponentWithRoot.Responsive = ({ locale, ...rest }) => {
	return (
		<ContextProviders
			routes={routes}
			framerSiteId={
				"a8d1bf17543235875742a4578f1d6b2cd82ea3d1960d650561752b6f8ce8433b"
			}
			locale={locale}
			locales={locales}
		>
			<WithFramerBreakpoints
				Component={stdin_default}
				variants={defaultResponsiveVariants}
				{...rest}
			/>
		</ContextProviders>
	);
};
Object.assign(ComponentWithRoot, stdin_default);
var cta_button_default = ComponentWithRoot;
export { cta_button_default as default };
