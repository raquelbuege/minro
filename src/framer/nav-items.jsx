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
 * title?: string // Title
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
import { className, css, fonts } from "./chunks/chunk-QY5UAKSC.js";
import { routes } from "./chunks/chunk-A46GJBWP.js";

// virtual:nav-items
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framer.com/m/nav-items-4Dsf.js
import { jsx as _jsx } from "react/jsx-runtime";
import {
	addFonts,
	addPropertyControls,
	ControlType,
	cx,
	getFontsFromSharedStyle,
	Link,
	RichText,
	useComponentViewport,
	useLocaleInfo,
	useVariantState,
	withCSS,
} from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
import { useRef } from "react";
var enabledGestures = {
	fDDuFMHox: {
		hover: true,
	},
};
var serializationHash = "framer-S7jH8";
var variantClassNames = {
	fDDuFMHox: "framer-v-1fh2yjx",
};
function addPropertyOverrides(overrides, ...variants) {
	const nextOverrides = {};
	variants?.forEach(
		(variant) => variant && Object.assign(nextOverrides, overrides[variant]),
	);
	return nextOverrides;
}
var transition1 = {
	damping: 50,
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
var getProps = ({ height, id, link, title, width, ...props }) => {
	return {
		...props,
		FcK_TvsYr: title ?? props.FcK_TvsYr ?? "Process",
		QuWKPWgPR: link ?? props.QuWKPWgPR,
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
		className: className2,
		layoutId,
		variant,
		FcK_TvsYr,
		QuWKPWgPR,
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
		defaultVariant: "fDDuFMHox",
		enabledGestures,
		ref: refBinding,
		variant,
		variantClassNames,
	});
	const layoutDependency = createLayoutDependency(props, variants);
	const sharedStyleClassNames = [className];
	const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
	return (
		<LayoutGroup id={layoutId ?? defaultLayoutId}>
			<Variants animate={variants} initial={false}>
				<Transition value={transition1}>
					<Link
						href={QuWKPWgPR}
						motionChild={true}
						nodeId={"fDDuFMHox"}
						openInNewTab={false}
						scopeId={"okGLtXIaN"}
						smoothScroll={true}
					>
						<motion.a
							{...restProps}
							{...gestureHandlers}
							className={`${cx(scopingClassNames, "framer-1fh2yjx", className2, classNames)} framer-16xevj4`}
							data-framer-name={"Default"}
							layoutDependency={layoutDependency}
							layoutId={"fDDuFMHox"}
							ref={refBinding}
							style={{
								backgroundColor: "rgba(0, 0, 0, 0)",
								borderBottomLeftRadius: 4,
								borderBottomRightRadius: 4,
								borderTopLeftRadius: 4,
								borderTopRightRadius: 4,
								...style,
							}}
							variants={{
								"fDDuFMHox-hover": {
									backgroundColor:
										"var(--token-cfb0af42-62a5-486a-837b-9870b5e7030b, rgba(255, 255, 255, 0.05))",
								},
							}}
							{...addPropertyOverrides(
								{
									"fDDuFMHox-hover": {
										"data-framer-name": void 0,
									},
								},
								baseVariant,
								gestureVariant,
							)}
						>
							<RichText
								__fromCanvasComponent={true}
								className={"framer-odcd3z"}
								fonts={["Inter"]}
								layoutDependency={layoutDependency}
								layoutId={"qWUbCUIbo"}
								style={{
									"--framer-link-text-color": "rgb(0, 153, 255)",
									"--framer-link-text-decoration": "underline",
								}}
								text={FcK_TvsYr}
								verticalAlignment={"top"}
								withExternalLayout={true}
							>
								<React.Fragment>
									<motion.p
										className={"framer-styles-preset-x6ge9v"}
										data-styles-preset={"D1fS_zrfW"}
									>
										{"Process"}
									</motion.p>
								</React.Fragment>
							</RichText>
						</motion.a>
					</Link>
				</Transition>
			</Variants>
		</LayoutGroup>
	);
});
var css2 = [
	"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
	".framer-S7jH8.framer-16xevj4, .framer-S7jH8 .framer-16xevj4 { display: block; }",
	".framer-S7jH8.framer-1fh2yjx { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 8px 14px 8px 14px; position: relative; text-decoration: none; width: min-content; }",
	".framer-S7jH8 .framer-odcd3z { flex: none; height: auto; position: relative; white-space: pre; width: auto; }",
	"@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-S7jH8.framer-1fh2yjx { gap: 0px; } .framer-S7jH8.framer-1fh2yjx > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-S7jH8.framer-1fh2yjx > :first-child { margin-left: 0px; } .framer-S7jH8.framer-1fh2yjx > :last-child { margin-right: 0px; } }",
	...css,
];
var FramerokGLtXIaN = withCSS(Component, css2, "framer-S7jH8");
var stdin_default = FramerokGLtXIaN;
FramerokGLtXIaN.displayName = "nav items";
FramerokGLtXIaN.defaultProps = {
	height: 33,
	width: 75,
};
addPropertyControls(FramerokGLtXIaN, {
	FcK_TvsYr: {
		defaultValue: "Process",
		displayTextArea: false,
		title: "Title",
		type: ControlType.String,
	},
	QuWKPWgPR: {
		title: "Link",
		type: ControlType.Link,
	},
});
addFonts(
	FramerokGLtXIaN,
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
		...getFontsFromSharedStyle(fonts),
	],
	{
		supportsExplicitInterCodegen: true,
	},
);

// virtual:nav-items
import { WithFramerBreakpoints } from "unframer";
import { jsx } from "react/jsx-runtime";
var locales = [];
var defaultResponsiveVariants = {};
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
 * Renders NavItemsFramerComponent for all breakpoints with a variants map. Variant prop is inferred per breakpoint.
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
var nav_items_default = ComponentWithRoot;
export { nav_items_default as default };
