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
 * variant?: 'closed' | 'open' // Variant
 * click?: Function // Click
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
import { routes } from "../chunks/chunk-A46GJBWP.js";

// virtual:navigation/hamburger
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framer.com/m/Navigation-hamburger-YGpU.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import {
	addFonts,
	addPropertyControls,
	ControlType,
	cx,
	useActiveVariantCallback,
	useComponentViewport,
	useLocaleInfo,
	useVariantState,
	withCSS,
} from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
import { useRef } from "react";
var cycleOrder = ["CCzsuFlCd", "P6NtMGY4B"];
var serializationHash = "framer-tpF2z";
var variantClassNames = {
	CCzsuFlCd: "framer-v-qqoba6",
	P6NtMGY4B: "framer-v-r88wzo",
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
	stiffness: 500,
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
	closed: "CCzsuFlCd",
	open: "P6NtMGY4B",
};
var getProps = ({ click, height, id, width, ...props }) => {
	return {
		...props,
		variant:
			humanReadableVariantMap[props.variant] ?? props.variant ?? "CCzsuFlCd",
		W41POyFF1: click ?? props.W41POyFF1,
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
	const { style, className, layoutId, variant, W41POyFF1, ...restProps } =
		getProps(props);
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
		defaultVariant: "CCzsuFlCd",
		ref: refBinding,
		variant,
		variantClassNames,
	});
	const layoutDependency = createLayoutDependency(props, variants);
	const { activeVariantCallback, delay } =
		useActiveVariantCallback(baseVariant);
	const onTap4k0kw0 = activeVariantCallback(async (...args) => {
		setGestureState({
			isPressed: false,
		});
		if (W41POyFF1) {
			const res = await W41POyFF1(...args);
			if (res === false) return false;
		}
		setVariant("P6NtMGY4B");
	});
	const onTap1iuta0k = activeVariantCallback(async (...args) => {
		setGestureState({
			isPressed: false,
		});
		if (W41POyFF1) {
			const res = await W41POyFF1(...args);
			if (res === false) return false;
		}
		setVariant("CCzsuFlCd");
	});
	const sharedStyleClassNames = [];
	const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
	const isDisplayed = () => {
		if (baseVariant === "P6NtMGY4B") return false;
		return true;
	};
	return (
		<LayoutGroup id={layoutId ?? defaultLayoutId}>
			<Variants animate={variants} initial={false}>
				<Transition value={transition1}>
					<motion.div
						{...restProps}
						{...gestureHandlers}
						className={cx(
							scopingClassNames,
							"framer-qqoba6",
							className,
							classNames,
						)}
						data-framer-name={"closed"}
						data-highlight={true}
						layoutDependency={layoutDependency}
						layoutId={"CCzsuFlCd"}
						onTap={onTap4k0kw0}
						ref={refBinding}
						style={{
							...style,
						}}
						{...addPropertyOverrides(
							{
								P6NtMGY4B: {
									"data-framer-name": "open",
									onTap: onTap1iuta0k,
								},
							},
							baseVariant,
							gestureVariant,
						)}
					>
						<motion.div
							className={"framer-1p0y4dr"}
							data-framer-name={"line3"}
							layoutDependency={layoutDependency}
							layoutId={"rfNZIpbzU"}
							style={{
								backgroundColor: "rgb(255, 255, 255)",
								rotate: 0,
							}}
							variants={{
								P6NtMGY4B: {
									rotate: 45,
								},
							}}
						/>
						{isDisplayed() && (
							<motion.div
								className={"framer-1xgtgyx"}
								data-framer-name={"line2"}
								layoutDependency={layoutDependency}
								layoutId={"ln3xynSIa"}
								style={{
									backgroundColor: "rgb(255, 255, 255)",
								}}
							/>
						)}
						<motion.div
							className={"framer-189pjhq"}
							data-framer-name={"line 1"}
							layoutDependency={layoutDependency}
							layoutId={"Y8cKx9rvq"}
							style={{
								backgroundColor: "rgb(255, 255, 255)",
								rotate: 0,
							}}
							variants={{
								P6NtMGY4B: {
									rotate: -45,
								},
							}}
						/>
					</motion.div>
				</Transition>
			</Variants>
		</LayoutGroup>
	);
});
var css = [
	"@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }",
	".framer-tpF2z.framer-284ezr, .framer-tpF2z .framer-284ezr { display: block; }",
	".framer-tpF2z.framer-qqoba6 { cursor: pointer; height: 31px; overflow: hidden; position: relative; width: 31px; }",
	".framer-tpF2z .framer-1p0y4dr { flex: none; height: 2px; left: calc(51.61290322580647% - 27px / 2); overflow: visible; position: absolute; top: 6px; width: 27px; }",
	".framer-tpF2z .framer-1xgtgyx { flex: none; height: 2px; left: calc(51.61290322580647% - 27px / 2); overflow: visible; position: absolute; top: calc(51.61290322580647% - 2px / 2); width: 27px; }",
	".framer-tpF2z .framer-189pjhq { bottom: 5px; flex: none; height: 2px; left: calc(51.61290322580647% - 27px / 2); overflow: visible; position: absolute; width: 27px; }",
	".framer-tpF2z.framer-v-r88wzo.framer-qqoba6 { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 31px); }",
	".framer-tpF2z.framer-v-r88wzo .framer-1p0y4dr { top: calc(51.61290322580647% - 2px / 2); }",
	".framer-tpF2z.framer-v-r88wzo .framer-189pjhq { bottom: unset; top: calc(51.61290322580647% - 2px / 2); }",
];
var FramerVMeXd8NFH = withCSS(Component, css, "framer-tpF2z");
var stdin_default = FramerVMeXd8NFH;
FramerVMeXd8NFH.displayName = "Navigation/hamburger";
FramerVMeXd8NFH.defaultProps = {
	height: 31,
	width: 31,
};
addPropertyControls(FramerVMeXd8NFH, {
	variant: {
		options: ["CCzsuFlCd", "P6NtMGY4B"],
		optionTitles: ["closed", "open"],
		title: "Variant",
		type: ControlType.Enum,
	},
	W41POyFF1: {
		title: "Click",
		type: ControlType.EventHandler,
	},
});
addFonts(
	FramerVMeXd8NFH,
	[
		{
			explicitInter: true,
			fonts: [],
		},
	],
	{
		supportsExplicitInterCodegen: true,
	},
);

// virtual:navigation/hamburger
import { WithFramerBreakpoints } from "unframer";
import { jsx } from "react/jsx-runtime";
var locales = [];
var defaultResponsiveVariants = {
	base: "P6NtMGY4B",
	xl: "CCzsuFlCd",
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
 * Renders HamburgerFramerComponent for all breakpoints with a variants map. Variant prop is inferred per breakpoint.
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
var hamburger_default = ComponentWithRoot;
export { hamburger_default as default };
