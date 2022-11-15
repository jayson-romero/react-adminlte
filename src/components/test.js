import React from "react";

const test = () => {
	return (
		<div>
			<div>
				{"{"}/* Navbar */{"}"}
				<nav classname="main-header navbar navbar-expand navbar-white navbar-light">
					{"{"}/* Left navbar links */{"}"}
					<ul classname="navbar-nav">
						<li classname="nav-item">
							<a
								classname="nav-link"
								data-widget="pushmenu"
								href="#"
								role="button"
							>
								<i classname="fas fa-bars" />
							</a>
							<i classname="fas fa-bars"></i>
						</li>
						<i classname="fas fa-bars">
							<li classname="nav-item d-none d-sm-inline-block">
								<a href="index3.html" classname="nav-link">
									Home
								</a>
							</li>
							<li classname="nav-item d-none d-sm-inline-block">
								<a href="#" classname="nav-link">
									Contact
								</a>
							</li>
						</i>
					</ul>
					<i classname="fas fa-bars">
						{"{"}/* Right navbar links */{"}"}
						<ul classname="navbar-nav ml-auto">
							{"{"}/* Navbar Search */{"}"}
							<li classname="nav-item">
								<a
									classname="nav-link"
									data-widget="navbar-search"
									href="#"
									role="button"
								>
									<i classname="fas fa-search"></i>
								</a>
								<i classname="fas fa-search">
									<div classname="navbar-search-block">
										<form classname="form-inline">
											<div classname="input-group input-group-sm">
												<input
													classname="form-control form-control-navbar"
													type="search"
													placeholder="Search"
													aria-label="Search"
												/>
												<div classname="input-group-append">
													<button classname="btn btn-navbar" type="submit">
														<i classname="fas fa-search"></i>
													</button>
													<i classname="fas fa-search">
														<button
															classname="btn btn-navbar"
															type="button"
															data-widget="navbar-search"
														>
															<i classname="fas fa-times"></i>
														</button>
														<i classname="fas fa-times"></i>
													</i>
												</div>
												<i classname="fas fa-search">
													<i classname="fas fa-times"></i>
												</i>
											</div>
											<i classname="fas fa-search">
												<i classname="fas fa-times"></i>
											</i>
										</form>
									</div>
									<i classname="fas fa-search">
										<i classname="fas fa-times"></i>
									</i>
								</i>
							</li>
							<i classname="fas fa-search">
								<i classname="fas fa-search">
									<i classname="fas fa-times">
										{"{"}/* Messages Dropdown Menu */{"}"}
										<li classname="nav-item dropdown">
											<a classname="nav-link" data-toggle="dropdown" href="#">
												<i classname="far fa-comments">
													<span classname="badge badge-danger navbar-badge">
														3
													</span>
												</i>
											</a>
											<i classname="far fa-comments">
												<div classname="dropdown-menu dropdown-menu-lg dropdown-menu-right">
													<a href="#" classname="dropdown-item">
														{"{"}/* Message Start */{"}"}
														<div classname="media">
															<img
																src="dist/img/user1-128x128.jpg"
																alt="User Avatar"
																classname="img-size-50 mr-3 img-circle"
															/>
															<div classname="media-body">
																<h3 classname="dropdown-item-title">
																	Brad Diesel
																	<span classname="float-right text-sm text-danger">
																		<i classname="fas fa-star" />
																	</span>
																	<i classname="fas fa-star"></i>
																</h3>
																<i classname="fas fa-star">
																	<p classname="text-sm">
																		Call me whenever you can...
																	</p>
																	<p classname="text-sm text-muted">
																		<i classname="far fa-clock mr-1">
																			{" "}
																			4 Hours Ago
																		</i>
																	</p>
																	<i classname="far fa-clock mr-1"></i>
																</i>
															</div>
															<i classname="fas fa-star">
																<i classname="far fa-clock mr-1"></i>
															</i>
														</div>
														<i classname="fas fa-star">
															<i classname="far fa-clock mr-1">
																{"{"}/* Message End */{"}"}
															</i>
														</i>
													</a>
													<i classname="fas fa-star">
														<i classname="far fa-clock mr-1">
															<div classname="dropdown-divider">
																<a href="#" classname="dropdown-item">
																	{"{"}/* Message Start */{"}"}
																	<div classname="media">
																		<img
																			src="dist/img/user8-128x128.jpg"
																			alt="User Avatar"
																			classname="img-size-50 img-circle mr-3"
																		/>
																		<div classname="media-body">
																			<h3 classname="dropdown-item-title">
																				John Pierce
																				<span classname="float-right text-sm text-muted">
																					<i classname="fas fa-star" />
																				</span>
																				<i classname="fas fa-star"></i>
																			</h3>
																			<i classname="fas fa-star">
																				<p classname="text-sm">
																					I got your message bro
																				</p>
																				<p classname="text-sm text-muted">
																					<i classname="far fa-clock mr-1">
																						{" "}
																						4 Hours Ago
																					</i>
																				</p>
																				<i classname="far fa-clock mr-1"></i>
																			</i>
																		</div>
																		<i classname="fas fa-star">
																			<i classname="far fa-clock mr-1"></i>
																		</i>
																	</div>
																	<i classname="fas fa-star">
																		<i classname="far fa-clock mr-1">
																			{"{"}/* Message End */{"}"}
																		</i>
																	</i>
																</a>
																<i classname="fas fa-star">
																	<i classname="far fa-clock mr-1">
																		<div classname="dropdown-divider">
																			<a href="#" classname="dropdown-item">
																				{"{"}/* Message Start */{"}"}
																				<div classname="media">
																					<img
																						src="dist/img/user3-128x128.jpg"
																						alt="User Avatar"
																						classname="img-size-50 img-circle mr-3"
																					/>
																					<div classname="media-body">
																						<h3 classname="dropdown-item-title">
																							Nora Silvester
																							<span classname="float-right text-sm text-warning">
																								<i classname="fas fa-star" />
																							</span>
																							<i classname="fas fa-star"></i>
																						</h3>
																						<i classname="fas fa-star">
																							<p classname="text-sm">
																								The subject goes here
																							</p>
																							<p classname="text-sm text-muted">
																								<i classname="far fa-clock mr-1">
																									{" "}
																									4 Hours Ago
																								</i>
																							</p>
																							<i classname="far fa-clock mr-1"></i>
																						</i>
																					</div>
																					<i classname="fas fa-star">
																						<i classname="far fa-clock mr-1"></i>
																					</i>
																				</div>
																				<i classname="fas fa-star">
																					<i classname="far fa-clock mr-1">
																						{"{"}/* Message End */{"}"}
																					</i>
																				</i>
																			</a>
																			<i classname="fas fa-star">
																				<i classname="far fa-clock mr-1">
																					<div classname="dropdown-divider">
																						<a
																							href="#"
																							classname="dropdown-item dropdown-footer"
																						>
																							See All Messages
																						</a>
																					</div>
																				</i>
																			</i>
																		</div>
																	</i>
																</i>
															</div>
														</i>
													</i>
												</div>
											</i>
										</li>
										<i classname="fas fa-star">
											<i classname="far fa-clock mr-1">
												<i classname="fas fa-star">
													<i classname="far fa-clock mr-1">
														<i classname="fas fa-star">
															<i classname="far fa-clock mr-1">
																{"{"}/* Notifications Dropdown Menu */{"}"}
																<li classname="nav-item dropdown">
																	<a
																		classname="nav-link"
																		data-toggle="dropdown"
																		href="#"
																	>
																		<i classname="far fa-bell">
																			<span classname="badge badge-warning navbar-badge">
																				15
																			</span>
																		</i>
																	</a>
																	<i classname="far fa-bell">
																		<div classname="dropdown-menu dropdown-menu-lg dropdown-menu-right">
																			<span classname="dropdown-item dropdown-header">
																				15 Notifications
																			</span>
																			<div classname="dropdown-divider">
																				<a href="#" classname="dropdown-item">
																					<i classname="fas fa-envelope mr-2">
																						{" "}
																						4 new messages
																						<span classname="float-right text-muted text-sm">
																							3 mins
																						</span>
																					</i>
																				</a>
																				<i classname="fas fa-envelope mr-2">
																					<div classname="dropdown-divider">
																						<a
																							href="#"
																							classname="dropdown-item"
																						>
																							<i classname="fas fa-users mr-2">
																								{" "}
																								8 friend requests
																							</i>
																						</a>
																					</div>
																				</i>
																			</div>
																		</div>
																	</i>
																</li>
															</i>
														</i>
													</i>
												</i>
											</i>
										</i>
									</i>
								</i>
							</i>
						</ul>
					</i>
				</nav>
				<i classname="far fa-clock mr-1">
					<i classname="fas fa-star">
						<i classname="far fa-clock mr-1">
							<i classname="far fa-bell">
								<i classname="fas fa-envelope mr-2">
									<i classname="fas fa-users mr-2">
										<span className="float-right text-muted text-sm">
											12 hours
										</span>
										<div className="dropdown-divider" />
										<a href="#" className="dropdown-item">
											<i className="fas fa-file mr-2" /> 3 new reports
											<span className="float-right text-muted text-sm">
												2 days
											</span>
										</a>
										<div className="dropdown-divider" />
										<a href="#" className="dropdown-item dropdown-footer">
											See All Notifications
										</a>
									</i>
								</i>
							</i>
						</i>
					</i>
				</i>
			</div>
			<i classname="fas fa-star">
				<i classname="far fa-clock mr-1">
					<i classname="far fa-bell">
						<i classname="fas fa-envelope mr-2">
							<i classname="fas fa-users mr-2">
								<li className="nav-item">
									<a
										className="nav-link"
										data-widget="fullscreen"
										href="#"
										role="button"
									>
										<i className="fas fa-expand-arrows-alt" />
									</a>
								</li>
								<li className="nav-item">
									<a
										className="nav-link"
										data-widget="control-sidebar"
										data-controlsidebar-slide="true"
										href="#"
										role="button"
									>
										<i className="fas fa-th-large" />
									</a>
								</li>
								{/* /.navbar */}
							</i>
						</i>
					</i>
				</i>
			</i>
		</div>
	);
};

export default test;
